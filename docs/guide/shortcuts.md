# Raccourcis & Gestes d'Interaction

Pour garantir un flux de travail fluide et sans rupture, Traaay implémente une matrice d'interaction claire et prévisible depuis la palette flottante et les menus.

---

## Matrice des Actions dans la Palette Top Traaay

| Geste / Touche | Cible normale (Icône visible) | Cible sous l'encoche (⚠️) |
| :--- | :--- | :--- |
| **Clic gauche simple** | Téléporte le curseur et déploie le menu natif de l'icône | **Bloqué** : pas de saut de curseur dans le vide + notification d'alerte |
| **Clic droit** | Téléporte le curseur et active le menu contextuel secondaire | **Bloqué** : alerte de dissimulation sous le Notch |
| **⌘ + Clic gauche** | Met au premier plan l'application native correspondante | **Autorisé** : met au premier plan l'application sans toucher à la barre de menu |

---

## Détail des Interactions

### 1. Clic Gauche : Téléportation & Déclenchement Natif
Lorsque vous cliquez sur une icône dans la palette Top Traaay, Traaay calcule la coordonnée absolue du composant dans la barre de menu et transmet l'événement souris au système. Le menu natif de l'application s'ouvre instantanément sous son icône d'origine.

<div class="screenshot-frame">
  <img src="/images/traaay-native-menu.png" alt="Déclenchement d'un menu d'icône via Traaay" />
  <div class="screenshot-caption">Déclenchement natif instantané d'un menu de statut grâce à la téléportation de curseur de Traaay.</div>
</div>

### 2. Clic Droit : Menu Contextuel Alternatif
Certaines applications de barre de menu proposent deux comportements distincts selon le bouton utilisé (par exemple, clic gauche pour l'état rapide et clic droit pour les Préférences / Quitter). Le clic droit dans Traaay reproduit fidèlement ce comportement natif.

### 3. ⌘ + Clic : Accès Direct à l'Application
Si vous souhaitez simplement amener l'application au premier plan (ouvrir sa fenêtre principale plutôt que son menu de barre de tâches), maintenez la touche **⌘ (Commande)** enfoncée pendant le clic. 

Cette action fonctionne **même pour les applications dont l'icône est dissimulée sous le Notch**, car elle active le processus via l'API `NSRunningApplication` sans dépendre de la visibilité graphique de la barre de menus.

---

## Protection Contre la Téléportation dans le Vide

Dans les premières versions ou sur les utilitaires concurrents, cliquer sur une icône masquée sous l'encoche téléportait le curseur de la souris au centre du Notch noir, provoquant des clics parasites ou une perte de repère pour l'utilisateur.

Avec Traaay :
- **Si l'icône est sous l'encoche** : le curseur ne bouge pas.
- Une alerte visuelle vous informe que l'élément est occulté par l'écran physique.
- Pour y accéder, dépliez de l'espace avec le séparateur ou utilisez le raccourci `⌘+Clic`.
