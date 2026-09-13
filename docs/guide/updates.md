# Mises à jour

Traaay sait se mettre à jour seul, sans repasser par un téléchargement manuel. Cette page décrit où se trouve la commande, ce qu'elle fait, et quoi faire lorsqu'elle échoue.

---

## Où se trouve la commande

1. **Clic droit** sur l'icône Traaay dans la barre des menus pour ouvrir le panneau de configuration.
2. Rendez-vous dans la section **Mises à jour**.
3. Le panneau affiche la version installée, le canal actif, et le bouton **Rechercher une mise à jour**.

> [!IMPORTANT]
> La recherche est **manuelle**. Traaay ne vérifie rien en arrière-plan et ne vous interrompt jamais de lui-même : rien ne part tant que vous n'avez pas appuyé sur le bouton.

---

## Les deux canaux

| Canal | Pour qui | Compte requis |
| :--- | :--- | :--- |
| **Stable (public)** | Tout le monde. C'est le canal par défaut. | Aucun |
| **Interne (privé)** | Développement seulement — versions non finalisées. | Oui, via la CLI `gh` authentifiée |

Le canal interne apparaît dans la liste mais reste inactif si la CLI GitHub n'est pas installée : le panneau affiche alors **« CLI gh requis »**. C'est un état attendu, pas une erreur — le canal stable suffit à un usage normal.

---

## Ce qui se passe pendant une mise à jour

Une fois la nouvelle version acceptée, Traaay enchaîne quatre étapes, affichées en clair dans le panneau :

1. **Téléchargement** de l'archive de la nouvelle version.
2. **Vérification de la signature** (minisign). C'est l'étape qui garantit que l'archive vient bien de nous.
3. **Installation** de la nouvelle version à la place de l'ancienne.
4. **Relance** de Traaay, qui redémarre déjà à jour.

> [!NOTE]
> Si la signature ne correspond pas, l'installation **s'interrompt** et l'application en place n'est pas touchée. Une mise à jour non vérifiable n'est jamais appliquée.

---

## Si la mise à jour échoue

- **« Traaay est à jour »** alors qu'une version plus récente existe : vous êtes probablement sur le canal stable et la version en question n'est pas encore passée en public. C'est normal.
- **Échec au téléchargement** : vérifiez votre connexion, puis relancez la recherche. Aucune trace n'est laissée par une tentative interrompue.
- **Échec répété** : [téléchargez directement le `.dmg` de la dernière version](https://github.com/ArboRithmDev/Traaay/releases/latest) et réinstallez par-dessus. Vos préférences sont conservées — elles vivent en dehors de l'application, dans `~/.config/traaay/preferences.json`.

---

## Voir aussi

- [Prise en main & Installation](./getting-started) — première installation et permissions système.
- [Questions fréquentes](./faq) — désinstallation, permissions, données conservées.
