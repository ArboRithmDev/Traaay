# Prise en main & Installation

Guide de démarrage rapide pour installer, configurer les permissions et utiliser Traaay au quotidien sur votre Mac.

---

## Prérequis système

- **Système d'exploitation** : macOS 13.0 (Ventura), macOS 14.0 (Sonoma), ou macOS 15.0+ (Sequoia).
- **Architecture** : Apple Silicon (M1, M2, M3, M4). Les Mac Intel ne sont pas encore couverts par une version publiée.
- **Droits système** : Accès aux fonctions d'accessibilité macOS (TCC).

---

## Installation

1. [**Téléchargez la dernière version de Traaay**](https://github.com/ArboRithmDev/Traaay/releases/latest) — le fichier `Traaay_<version>_aarch64.dmg`.
2. Ouvrez le fichier `.dmg` et glissez l'application **Traaay** dans votre dossier **Applications**.
3. Lancez Traaay depuis Spotlight ou votre dossier Applications.

> [!TIP]
> Traaay est signée avec un certificat Developer ID et notariée par Apple. Aucune manipulation de contournement n'est nécessaire : l'application s'ouvre d'un simple double-clic.

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

- **Clic gauche** : Ouvre la palette flottante **Top Traaay**, la vue compacte de vos utilitaires.
- **Clic droit** : Ouvre le **panneau de configuration**, où vous gérez la visibilité, les groupes et le séparateur.
- **Nouveau clic sur la même icône** : Referme la vue ouverte. Le clic fonctionne comme une bascule.

> [!NOTE]
> Traaay ne réagit pas au survol de la souris : toutes ses vues s'ouvrent par un clic explicite.

<div class="screenshot-frame">
  <img src="/images/traaay-settings-panel.png" alt="Panneau principal Traaay" />
  <div class="screenshot-caption">Le panneau de configuration principal permet de contrôler le comportement de chaque utilitaire.</div>
</div>
