// Orchestrateur d'extraction — un LANCEUR, et rien d'autre.
//
// Il lit `userdoc.json`, la seule déclaration du module, et exécute la commande
// que CHAQUE source y déclare sous `extractor`. Aucun extracteur n'est nommé
// ici : un tableau écrit en dur ferait de ce gabarit la copie d'un projet
// particulier, et le modèle cesserait d'être posable ailleurs.
//
// # Où vit le refus, et pourquoi pas ici
//
// Ce fichier ne prononce AUCUN refus documentaire — ni inventaire invalide, ni
// page altérée, ni trou, ni péremption. Ces verdicts vivent dans le MOTEUR
// Effortless (le noyau Rust `userdoc-kit`, atteint par les verbes
// `user_doc_inventory` et `user_doc_coverage`), qui les prononce avec ses codes
// de sortie. Un gabarit posé dans le projet est éditable par le projet : une
// règle recopiée ici serait un second foyer, contournable et divergent dès la
// première correction du premier.
//
// Ce lanceur ne juge donc qu'une chose, celle qui le regarde : un extracteur
// déclaré a-t-il abouti. Une extraction en échec n'est jamais un succès muet.

import { spawnSync } from 'node:child_process'
import { readFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

/** Racine de la stack de documentation — le parent de ce répertoire. */
const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..')

/** La déclaration du module, seul foyer de son contenu. */
const DECLARATION = resolve(ROOT, 'userdoc.json')

/**
 * Lit la déclaration, ou échoue franchement.
 *
 * Une déclaration illisible n'est pas « aucune source » : c'est une extraction
 * dont on ne sait rien. La confondre avec un inventaire vide rendrait vert un
 * build qui n'a rien dérivé.
 */
function readDeclaration() {
  let raw
  try {
    raw = readFileSync(DECLARATION, 'utf8')
  } catch (cause) {
    throw new Error(`userdoc.json illisible (${DECLARATION}) : ${cause.message}`)
  }
  try {
    return JSON.parse(raw)
  } catch (cause) {
    throw new Error(`userdoc.json n'est pas un JSON valide : ${cause.message}`)
  }
}

/**
 * Exécute l'extracteur d'une source. Rend `null` si tout s'est bien passé, la
 * raison de l'échec sinon.
 *
 * Seule la SORTIE STANDARD est capturée ; la sortie d'erreur passe telle quelle
 * à l'opérateur. C'est la même séparation que celle du moteur : mêler les deux
 * flux ferait entrer dans le résultat le bavardage de compilation, qui varie
 * avec la machine et l'instant.
 *
 * La déclaration ne porte aucun chemin de page : c'est l'extracteur qui écrit
 * la sienne. Le lanceur ne lit sa sortie standard que pour la rapporter — il
 * n'en fait rien d'autre, et n'a nulle part où l'écrire.
 */
function runExtractor(extractor) {
  const outcome = spawnSync(extractor.program, extractor.args ?? [], {
    cwd: extractor.cwd ? resolve(ROOT, extractor.cwd) : ROOT,
    encoding: 'utf8',
    stdio: ['ignore', 'pipe', 'inherit'],
  })
  if (outcome.error) {
    return `commande injouable (${extractor.program}) : ${outcome.error.message}`
  }
  if (outcome.signal) {
    return `interrompu par le signal ${outcome.signal}`
  }
  if (outcome.status !== 0) {
    return `sortie ${outcome.status}`
  }
  return null
}

/** Rapporte chaque source déclarée et rend le nombre d'échecs. */
function extractAll(sources) {
  let failures = 0
  for (const source of sources) {
    const extractor = source?.extractor
    if (!extractor) {
      // Une source sans extracteur est INVENTORIÉE sans être dérivée : c'est un
      // cas déclaré, pas un oubli à corriger ici. Le moteur, lui, dira si une
      // page manque.
      console.log(`➖ ${source?.id ?? '(sans identifiant)'} : aucun extracteur déclaré`)
      continue
    }
    const reason = runExtractor(extractor)
    if (reason === null) {
      console.log(`✅ ${source.id}`)
    } else {
      failures += 1
      console.error(`❌ ${source.id} : ${reason}`)
    }
  }
  return failures
}

let declaration
try {
  declaration = readDeclaration()
} catch (failure) {
  console.error(`❌ ${failure.message}`)
  process.exit(1)
}

const sources = Array.isArray(declaration.sources) ? declaration.sources : []

// On exécute TOUS les extracteurs avant de sortir, puis on sort non nul si l'un
// d'eux a échoué. S'arrêter au premier ferait corriger les pannes une par une,
// au rythme d'une construction complète chacune.
const failures = extractAll(sources)
if (failures > 0) {
  console.error(
    `❌ ${failures} extraction(s) en échec — publier une documentation amputée serait pire\n` +
      `   qu'aucune publication : une page amputée se lit comme une page complète.`,
  )
}
process.exit(failures > 0 ? 1 : 0)
