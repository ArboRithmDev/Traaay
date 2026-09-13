# Questions fréquentes

Les situations qui reviennent le plus souvent, et ce qu'il faut faire dans chacune.

---

## L'autorisation d'Accessibilité ne prend pas

C'est le cas le plus courant : vous avez coché Traaay dans les Réglages Système, mais l'application se comporte comme si elle n'avait toujours pas le droit d'inspecter la barre des menus.

macOS ne réévalue cette autorisation qu'au lancement du processus. Dans l'ordre :

1. **Quittez complètement Traaay**, puis relancez-le. Dans la plupart des cas, cela suffit.
2. Si rien ne change, utilisez le bouton **Réinitialiser l'autorisation** du panneau de configuration. Traaay efface son entrée d'accessibilité et rouvre les Réglages Système pour que vous la réaccordiez proprement.
3. Décochez puis recochez **Traaay** dans **Confidentialité et sécurité > Accessibilité**, et relancez l'application.

> [!NOTE]
> Une entrée fantôme après une réinstallation est fréquente : macOS garde parfois l'ancienne autorisation attachée à une copie de l'application qui n'existe plus. La réinitialisation résout exactement ce cas.

---

## Traaay démarre-t-il tout seul avec mon Mac ?

Seulement si vous le lui demandez. Le lancement au démarrage est une option du panneau de configuration, désactivée tant que vous ne l'activez pas.

---

## Que deviennent mes icônes si je quitte Traaay ?

Elles reviennent toutes. En quittant, Traaay **déplie systématiquement le séparateur** avant de s'arrêter : votre barre des menus retrouve son état complet, aucune icône ne reste prisonnière d'un pli.

---

## Où sont stockées mes préférences ?

Dans un seul fichier, hors de l'application :

```
~/.config/traaay/preferences.json
```

Il contient vos groupes, la visibilité de chaque icône, la position du séparateur et la langue choisie. Il survit aux mises à jour et aux réinstallations. Le supprimer remet Traaay dans son état d'origine.

---

## Comment désinstaller Traaay proprement ?

1. Quittez Traaay (clic droit sur l'icône, puis Quitter). Vos icônes sont rendues à la barre des menus.
2. Glissez **Traaay.app** du dossier Applications vers la Corbeille.
3. Pour ne rien laisser derrière, supprimez le dossier de préférences :
   ```
   rm -rf ~/.config/traaay
   ```
4. Optionnel : retirez l'entrée **Traaay** de **Confidentialité et sécurité > Accessibilité**.

---

## Je ne vois aucune pastille ambrée — est-ce un bug ?

Non, c'est le comportement attendu dans deux cas :

- Vous travaillez sur un **moniteur externe**, qui n'a pas d'encoche : aucune icône n'y est masquée, donc aucune alerte.
- Sur l'écran intégré, **aucune icône n'atteint la zone de l'encoche**. Il n'y a rien à signaler.

Voir [Multi-écrans & moniteurs externes](./multi-screens) pour le détail.

---

## Traaay lit-il ce que je tape ?

Non. L'autorisation d'Accessibilité lui sert à deux choses, et à rien d'autre : mesurer la position des icônes dans la barre des menus, et rejouer le clic que vous venez de demander. Aucune frappe de clavier n'est enregistrée, aucun contenu d'application n'est lu.

---

## Mon Mac est un Intel — puis-je installer Traaay ?

Pas aujourd'hui. Les versions publiées ciblent **Apple Silicon** (`aarch64`). Aucune version Intel n'est distribuée pour l'instant.

---

## Voir aussi

- [Prise en main & Installation](./getting-started)
- [Mises à jour](./updates)
