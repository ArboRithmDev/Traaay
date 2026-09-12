# Prise en main & Installation

Guide de démarrage rapide pour installer, configurer les permissions et utiliser Traaay au quotidien sur votre Mac.

---

## Prérequis système

- **Système d'exploitation** : macOS 13.0 (Ventura), macOS 14.0 (Sonoma), ou macOS 15.0+ (Sequoia).
- **Architecture** : Apple Silicon (M1, M2, M3, M4) ou Intel x86_64.
- **Droits système** : Accès aux fonctions d'accessibilité macOS (TCC).

---

## Installation

1. Téléchargez la dernière version de **Traaay.dmg**.
2. Ouvrez le fichier `.dmg` et glissez l'application **Traaay** dans votre dossier **Applications**.
3. Lancez Traaay depuis Spotlight ou votre dossier Applications.

---

## Configuration des permissions TCC (Accessibilité)

Pour cartographier les éléments de votre barre des menus, détecter leur position par rapport à l'encoche et permettre l'interaction via la palette, macOS exige l'autorisation d'Accessibilité.

1. Dès le premier lancement, Traaay vous invite à ouvrir les **Réglages Système**.
2. Rendez-vous dans **Confidentialité et sécurité > Accessibilité**.
3. Cochez **Traaay** pour activer l'autorisation.
4. Si Traaay était déjà ouvert, relancez-le pour que la permission prenne effet immédiatement.

> [!NOTE]
> Traaay n'enregistre aucune frappe de clavier et ne lit aucun contenu privé. L'API d'accessibilité (`AXUIElement`) est strictement réservée à l'inspection de la géométrie de la barre des menus et au déclenchement des clics demandés par l'utilisateur.

---

## Premier contact : L'icône de statut

Dès son lancement, Traaay place son icône caractéristique (trois strates horizontales en cascade) dans votre barre des menus.

- **Clic simple** : Ouvre le panneau principal de réglages et de gestion des icônes.
- **Clic droit** : Affiche le menu contextuel rapide (Accès aux préférences, quitter Traaay).
- **Survol de la zone** : Affiche la palette flottante Top Traaay si l'option est activée.

<div class="screenshot-frame">
  <img src="/images/traaay-settings-panel.png" alt="Panneau principal Traaay" />
  <div class="screenshot-caption">Le panneau de configuration principal permet de contrôler le comportement de chaque utilitaire.</div>
</div>
