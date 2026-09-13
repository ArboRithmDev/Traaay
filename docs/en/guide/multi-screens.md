# Multi-Display Setup

Traaay automatically adapts to your monitor arrangement: standalone MacBook, dual-screen setups with external displays, or closed-clamshell desktop mode.

---

## Multi-Monitor Mechanics

When your MacBook is connected to one or more external displays:
1. **The built-in MacBook display** features a hardware notch that can occlude status bar items.
2. **The external monitor** (e.g., Apple Studio Display or standard 4K screen) features a continuous, uninterrupted menu bar with no hardware obstruction.

---

## Per-Display Detection

Traaay keeps track of your display arrangement at all times: plugging in, unplugging, or rearranging a monitor is picked up immediately, with no need to restart the app.

For the screen you are interacting with, Traaay works out whether a notch cuts into the menu bar:
- On a screen that has one, it measures which items fall behind it.
- On an external monitor the menu bar is continuous, so **no item is ever occluded**.

### Visual Behavior:
- **On the MacBook Built-in Display**: Amber dots and notch alerts trigger whenever items overflow into the notch area.
- **On External Displays**: Amber dots are **completely disabled**. You enjoy a clean, distraction-free view with zero false alarms.

```
MacBook Pro (Built-in Display with Notch):
[ App Menus ]     [⚠️ Notch]     [Visible Items]
                   ▲ Amber dots active

Studio Display 27" (External Display without Notch):
[ App Menus ]                  [All Items Visible]
                               ▲ Zero amber dots
```

---

## Clamshell Mode

When you close your MacBook lid to work exclusively on an external monitor, the built-in display stops being active and Traaay works solely against the external monitor. Since that monitor has no notch, no amber dots appear for as long as the lid stays shut.
