# Smart Menu Bar Separator

The **Smart Separator** represents **Strata 1** of Traaay (Glacier Cyan `#38BDF8`). It splits your menu bar into two zones: **permanent** items (always visible) and **secondary** items (foldable).

---

## How Folding & Unfolding Works

Rather than forcibly terminating background utilities, Traaay dynamically adjusts separator margins and item visibility in the status bar:

- **Folded State (Default)**: Secondary items are tucked away. Your menu bar remains clean, distraction-free, and leaves plenty of room for active app menus.
- **Unfolded State**: With a click on the separator or a keyboard shortcut, the bar expands smoothly to reveal all background utilities.

```
Unfolded State:
[ Apple ] [ File ] [ Edit ] ... [ Item 1 ] [ Item 2 ] ┃ [ Item 3 ] [ Item 4 ] [ Clock ]
                                ▲ Secondary           ┃ ▲ Permanent

Folded State:
[ Apple ] [ File ] [ Edit ] .......................... ┃ [ Item 3 ] [ Item 4 ] [ Clock ]
                                                       ┃ ▲ Permanent
```

---

## Reordering & Settings

Inside the Traaay settings window:

1. View the live list of all items currently registered in your menu bar.
2. Toggle the **Fold / Unfold** switch to immediately preview changes.
3. Drag items between the *Always Visible* and *Foldable* sections to tailor your workspace.

<div class="screenshot-frame">
  <img src="/images/traaay-settings-panel.png" alt="Traaay folding controls" />
  <div class="screenshot-caption">Toggle folding states on the fly from the header switch in the settings window.</div>
</div>

---

## Notch Collisions

When folded items are expanded, their cumulative width might exceed the available screen space to the right of the notch.

This is where **Strata 2** steps in: Traaay calculates geometric collisions with the notch and notifies you immediately. Read more in [MacBook Notch Handling](./notch).
