# Le Séparateur Intelligent

Le **Séparateur Intelligent** constitue la **Strate 1** de Traaay (Glacier Cyan `#38BDF8`). Il permet de diviser votre barre des menus en deux catégories : les icônes **permanentes** (toujours visibles) et les icônes **secondaires** (repliées).

---

## Fonctionnement du pliage / dépliage

Plutôt que de masquer brutalement vos utilitaires ou de forcer leur fermeture, Traaay ajuste dynamiquement la largeur et l'espacement du séparateur dans la barre des menus :

- **État Replié (Défaut)** : Les utilitaires secondaires sont rangés hors de vue. Votre barre des menus est aérée, élégante et laisse toute la place nécessaire à l'application active.
- **État Déplié** : D'un simple clic sur le séparateur ou via un raccourci clavier, la barre s'étend pour dévoiler la totalité des icônes disponibles.

```
État Déplié :
[ Pomme ] [ Fichier ] [ Édition ] ... [ Icône 1 ] [ Icône 2 ] ┃ [ Icône 3 ] [ Icône 4 ] [ Heure ]
                                      ▲ Secondaires           ┃ ▲ Permanentes

État Replié :
[ Pomme ] [ Fichier ] [ Édition ] ........................... ┃ [ Icône 3 ] [ Icône 4 ] [ Heure ]
                                                              ┃ ▲ Permanentes
```

---

## Configuration et Réorganisation

Dans le panneau de configuration Traaay :

1. Vous retrouvez la liste complète des applications présentes dans votre barre des menus.
2. Basculez le commutateur **Replier / Déplier** pour tester immédiatement le rendu.
3. Glissez les applications entre la zone *Toujours visible* et la zone *Repliable* selon vos priorités de productivité.

<div class="screenshot-frame">
  <img src="/images/traaay-settings-panel.png" alt="Réglage du pliage Traaay" />
  <div class="screenshot-caption">Le bouton de bascule en haut du panneau permet d'inverser l'état du séparateur à la volée.</div>
</div>

---

## Comportement sous le Notch

Lorsque des icônes repliées sont déployées, leur nombre cumulé peut dépasser l'espace disponible à droite de l'encoche de l'écran. 

C'est ici qu'intervient la **Strate 2** : Traaay calcule la collision géométrique avec le Notch et vous avertit immédiatement. Voir [Gestion de l'encoche (Notch)](./notch).
