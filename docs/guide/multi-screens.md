# Multi-Écrans & Moniteurs Externes

Traaay s'adapte automatiquement à votre configuration d'affichage : MacBook seul, configuration double écran avec un moniteur externe, ou mode bureau fermé (*clamshell*).

---

## Le Comportement Multi-Écrans

Lorsque vous travaillez avec un MacBook relié à un ou plusieurs moniteurs externes :
1. **L'écran intégré du MacBook** possède une découpe physique (*Notch*) qui peut masquer les icônes de la barre de menu.
2. **Le moniteur externe** (ex : Apple Studio Display, écran 4K/5K externe) possède une barre de menu continue et linéaire, sans encoche ni zone d'occlusion.

---

## Détection par Écran

Traaay suit en permanence votre configuration d'affichage : brancher, débrancher ou réorganiser un moniteur est pris en compte immédiatement, sans relancer l'application.

Pour l'écran sur lequel vous interagissez, Traaay détermine si une encoche y découpe la barre des menus :
- Sur un écran qui en possède une, il mesure quelles icônes tombent derrière.
- Sur un moniteur externe, la barre des menus est continue : **aucune icône n'y est sous une encoche**.

### Résultat dans l'interface :
- **Sur l'écran du MacBook avec Notch** : Les pastilles ambrées et les alertes d'occlusion s'affichent normalement si les icônes dépassent la limite.
- **Sur l'écran externe sans Notch** : Les pastilles ambrées sont **strictement masquées**. Vous bénéficiez d'une vue propre et limpide, sans fausse alerte ni avertissement inutile.

```
MacBook Pro (Écran intégré avec Notch) :
[ Menus App ]     [⚠️ Notch]     [Icônes visibles]
                   ▲ Pastilles ambrées actives

Studio Display 27" (Moniteur externe sans Notch) :
[ Menus App ]                  [Toutes les icônes visibles]
                               ▲ Aucune pastille ambrée
```

---

## Mode Clamshell (Écran refermé)

Lorsque vous refermez le capot de votre MacBook pour l'utiliser uniquement avec un écran externe, l'écran intégré cesse d'être actif : Traaay ne travaille plus que sur le moniteur externe. Comme celui-ci n'a pas d'encoche, aucune pastille ambrée ne s'affiche tant que le capot reste fermé.
