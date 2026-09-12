# Introduction & Vision

**Traaay** est un utilitaire macOS conçu pour résoudre le problème croissant de l'encombrement de la barre des menus, particulièrement amplifié par l'apparition du **Notch** (l'encoche d'écran) sur les MacBooks récents.

---

## Le Constat : L'encombrement invisible

Sur macOS, chaque application en arrière-plan tend à installer son icône dans la barre des menus : synchronisation cloud, utilitaires audio, VPN, calendrier, messageries, météo, etc.

À cela s'ajoutent deux écueils majeurs :
1. **L'encombrement visuel** : une barre des menus saturée nuit à la concentration et encombre l'espace réservé aux menus de l'application active.
2. **Le piège de l'encoche (MacBook Notch)** : macOS masque silencieusement les icônes de barre de menu qui se retrouvent sous l'encoche physique de l'écran. L'utilisateur n'a aucun moyen natif de savoir quelles applications sont masquées, ni d'interagir avec elles sans fermer d'autres utilitaires.

---

## L'Approche Traaay : L'Architecture en 3 Strates

Traaay structure sa réponse autour de 3 piliers complémentaires :

```
┌────────────────────────────────────────────────────────┐
│  STRATE 1 (Glacier Cyan #38BDF8)                       │
│  Visibilité & Délimitation : Le Séparateur Repliable   │
├────────────────────────────────────────────────────────┤
│  STRATE 2 (Electric Blue #3B82F6)                      │
│  Contrôle & Conscience : Détection du Notch & Pastille │
├────────────────────────────────────────────────────────┤
│  STRATE 3 (Soft Mint #34D399)                          │
│  Fluidité & Accès Direct : Palette Flottante & Gestes  │
└────────────────────────────────────────────────────────┘
```

1. **Strate 1 — Clarté & Séparation** : Un séparateur visuel discret qui replie les utilitaires secondaires. Vous ne conservez sous les yeux que l'essentiel, tout en pouvant révéler le reste en un geste.
2. **Strate 2 — Conscience du Notch** : Traaay inspecte en temps réel la position géométrique de chaque élément de la barre des menus par rapport au rectangle d'occlusion de l'encoche. Les éléments masqués sont marqués d'une <span class="badge-notch">pastille ambrée</span> bien visible.
3. **Strate 3 — Accès Sans Friction** : Grâce à la palette flottante compacte **Top Traaay**, vous pouvez afficher, réordonner et déclencher vos utilitaires d'un clic, d'un clic droit ou d'un `⌘+Clic`, même si l'icône réelle est physiquement inaccessible sous l'encoche.

---

<div class="screenshot-frame">
  <img src="/images/traaay-top-strip.png" alt="Bandeau Top Traaay avec détection d'encoche" />
  <div class="screenshot-caption">La palette compacte Top Traaay identifie immédiatement les utilitaires cachés sous l'encoche grâce aux pastilles ambrées.</div>
</div>

## Prochaines étapes

- [Prise en main & Installation](./getting-started) : Découvrir comment installer Traaay et configurer les permissions système requises.
- [Le Séparateur intelligent](./separator) : Apprendre à configurer le repliage de vos icônes.
- [Gestion de l'encoche (Notch)](./notch) : Comprendre comment Traaay détecte et signale les icônes masquées.
