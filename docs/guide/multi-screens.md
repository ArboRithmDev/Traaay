# Multi-Écrans & Moniteurs Externes

Traaay s'adapte automatiquement à votre configuration d'affichage : MacBook seul, configuration double écran avec un moniteur externe, ou mode bureau fermé (*clamshell*).

---

## Le Comportement Multi-Écrans

Lorsque vous travaillez avec un MacBook relié à un ou plusieurs moniteurs externes :
1. **L'écran intégré du MacBook** possède une découpe physique (*Notch*) qui peut masquer les icônes de la barre de menu.
2. **Le moniteur externe** (ex : Apple Studio Display, écran 4K/5K externe) possède une barre de menu continue et linéaire, sans encoche ni zone d'occlusion.

---

## Détection Intelligente par Écran

Traaay écoute en temps réel les notifications de changement d'affichage du système (`NSApplicationDidChangeScreenParametersNotification`).

Pour chaque écran actif, Traaay inspecte les propriétés matérielles via `NSScreen` :
- `safeAreaInsets.top` et la présence de `auxiliaryTopLeftArea` / `auxiliaryTopRightArea`.
- Si l'écran actif est le moniteur externe, **aucune icône n'est sous une encoche**.

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

Lorsque vous refermez le capot de votre MacBook pour l'utiliser uniquement avec un écran externe, Traaay détecte que l'écran intégré est éteint et adapte immédiatement tous ses calculs pour la surface du moniteur externe actif.
