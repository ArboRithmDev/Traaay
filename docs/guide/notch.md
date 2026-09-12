# Gestion Intelligente de l'Encoche (Notch)

La gestion de l'encoche physique des MacBooks récents constitue la **Strate 2** de Traaay (Electric Blue `#3B82F6`).

---

## Le Problème de l'Encoche sur macOS

Sur les MacBook Pro (14" et 16") et MacBook Air (13.6" et 15.3") équipés d'Apple Silicon, la caméra FaceTime est logée dans une découpe noire (« encoche » ou *notch*) au centre supérieur de l'écran.

Lorsque de nombreuses icônes s'accumulent à droite de la barre des menus :
- macOS refuse de dessiner les icônes par-dessus l'encoche physique.
- Le système **masque silencieusement** les icônes situées à la frontière gauche de la zone de statut.
- **Conséquence directe** : l'utilisateur ne sait plus si ses utilitaires tournent en tâche de fond et ne peut plus y accéder.

---

## La Réponse Technologique de Traaay

Traaay interroge l'API `NSScreen` et les attributs d'accessibilité système pour calculer la géométrie exacte de chaque élément de la barre des menus par rapport à la zone réservée à l'encoche (`auxiliaryTopLeftArea` et `auxiliaryTopRightArea`).

```
                ┌───────────────┐
                │     NOTCH     │
┌───────────────┴───────────────┴─────────────────────────────┐
│ Menus App       [⚠️ X] [⚠️ Y]   [Icône A] [Icône B] [Horloge]│
└─────────────────────────────────────────────────────────────┘
                  ▲ Masquées       ▲ Visibles
```

---

## Les Pastilles Ambrées et Badges Contextuels

Lorsque Traaay détecte qu'une icône est occultée par l'encoche de l'écran :

1. **Dans la palette Top Traaay** : Une <span class="badge-notch">pastille ambrée</span> apparaît sur le coin supérieur de l'icône de l'application.
2. **Dans le panneau de configuration** : Un badge explicite `[Sous l'encoche]` et une puce orange signalent les éléments actuellement inaccessibles directement.

<div class="screenshot-frame">
  <img src="/images/traaay-settings-panel.png" alt="Badges sous l'encoche dans les réglages Traaay" />
  <div class="screenshot-caption">Dans le panneau des réglages, chaque icône cachée sous le Notch est explicitement signalée par une pastille ambrée.</div>
</div>

---

## Prévention des Clics Fantômes

Contrairement à d'autres utilitaires qui tentent de cliquer aveuglément sur les coordonnées théoriques de l'icône masquée :
- Si vous effectuez un clic standard sur une icône sous le notch, **Traaay refuse de téléporter la souris dans le vide** sous l'encoche.
- Une **notification système** vous prévient que l'action directe ne peut pas aboutir tant que l'icône est dissimulée.
- Pour interagir avec l'application, vous pouvez :
  - Soit replier temporairement d'autres icônes grâce au [Séparateur intelligent](./separator) pour faire ressortir l'icône de sous l'encoche.
  - Soit effectuer un `⌘+Clic` depuis la palette pour lancer la fenêtre principale de l'application.

---

## Réservation Stricte à l'Écran Porteur du Notch

Les pastilles ambrées et les avertissements d'encoche ne s'activent **que sur l'écran qui possède physiquement un notch**.

Si vous connectez un écran externe (Studio Display, moniteur 4K externe, vidéoprojecteur) :
- Les icônes s'étendent sur toute la largeur sans être masquées.
- Traaay désactive automatiquement les pastilles ambrées pour cet écran.
- Voir [Multi-écrans & Moniteurs](./multi-screens) pour les détails.
