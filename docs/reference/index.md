# Référence

Cette section rassemble les **surfaces stables** de Traaay : les valeurs, chemins et
comportements sur lesquels vous pouvez vous appuyer sans craindre qu'ils changent
d'une version à l'autre sans être annoncés.

Le [Guide](../guide/) explique comment utiliser Traaay. Cette page dit ce que Traaay
**garantit**.

> [!NOTE]
> Aucune donnée de cette page n'est encore dérivée automatiquement du code. Chaque
> valeur y est écrite à la main et relue à chaque version. La convention de
> transclusion de fragments scellés existe dans le gabarit de ce module, mais aucun
> fragment n'est scellé aujourd'hui — voir `PLAN.md` à la racine du module.

---

## Identifiant de l'application

| Élément | Valeur |
| :--- | :--- |
| Identifiant de bundle | `com.traaay.app` |
| Plateforme publiée | `darwin-aarch64` (Apple Silicon) |

C'est cet identifiant que macOS utilise pour ses autorisations. Il apparaît notamment
lorsque vous réinitialisez l'autorisation d'Accessibilité.

---

## Fichier de préférences

Chemin unique, hors du bundle de l'application :

```
~/.config/traaay/preferences.json
```

L'écriture est atomique : le fichier est écrit à côté puis renommé en place. Une
coupure de courant pendant une sauvegarde ne laisse jamais un fichier à moitié écrit.

| Champ | Type | Rôle |
| :--- | :--- | :--- |
| `version` | entier | Version du format de préférences. |
| `isCollapsed` | booléen | État replié / déplié du séparateur. |
| `separatorX` | entier ou `null` | Position mémorisée du séparateur. `null` tant qu'aucune position n'a été fixée. |
| `groups` | liste de chaînes | Vos groupes d'utilitaires, dans l'ordre. |
| `items` | dictionnaire | Une entrée par icône, indexée par son identifiant. |
| `language` | chaîne ou absent | Langue de l'interface. Absent tant que vous n'avez rien choisi. |

Chaque entrée de `items` porte deux champs : `visibility` et `group`.

### Groupes par défaut

À la première ouverture, quatre groupes sont posés :

`Production` · `IA` · `Créativité` · `Utilitaires`

Ils sont entièrement modifiables : renommer ou supprimer un groupe ne casse rien.

---

## Les trois niveaux de visibilité

C'est la surface la plus stable de Traaay, et celle qui porte le modèle en trois
strates décrit dans le guide.

| Valeur | Dans l'interface | Ce que ça fait |
| :--- | :--- | :--- |
| `always_visible` | Toujours visible | L'icône reste dans la partie visible de la barre des menus, quel que soit l'état du séparateur. |
| `hidden_bar` | Repliable | L'icône passe derrière le séparateur lorsqu'il est replié, et réapparaît lorsqu'il est déplié. |
| `totally_hidden` | Masquée | L'icône est retirée de la barre des menus et n'apparaît pas non plus dans la palette Top Traaay. |

---

## Canaux de mise à jour

| Identifiant | Libellé | Dépôt | Authentification |
| :--- | :--- | :--- | :--- |
| `stable` | Stable (public) | `ArboRithmDev/Traaay` | Aucune |
| `internal` | Interne (privé) | `ArboRithmDev/Traaay-Dev` | CLI `gh` authentifiée |

Chaque canal expose un manifeste `latest.json` sur la release la plus récente de son
dépôt. Toute archive téléchargée est vérifiée par signature **minisign** avant d'être
installée ; une signature qui ne correspond pas interrompt l'installation et laisse
l'application en place intacte.

Voir [Mises à jour](../guide/updates) pour la procédure côté utilisateur.

---

## Matrice des clics sur l'icône Traaay

| Geste | Effet |
| :--- | :--- |
| Clic gauche | Ouvre la palette compacte **Top Traaay**. |
| Clic droit | Ouvre le **panneau de configuration**. |
| Même clic répété | Referme la vue ouverte. |

Traaay ne réagit à aucun survol de souris et n'enregistre aucun raccourci clavier
global. Voir [Gestes d'interaction](../guide/shortcuts) pour les gestes dans la palette
elle-même.

---

## Ce qui n'est pas garanti

Pour être honnête sur les bords :

- **Les identifiants d'icônes** (`items`) sont dérivés du nom que chaque application
  donne à son élément de barre des menus. Une application qui renomme le sien
  réapparaîtra comme une nouvelle icône, avec ses réglages par défaut.
- **Le nom des groupes par défaut** peut évoluer. Vos groupes à vous, une fois créés,
  ne sont jamais réécrits.
