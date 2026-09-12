# Multi-Display Setup

Traaay automatically adapts to your monitor arrangement: standalone MacBook, dual-screen setups with external displays, or closed-clamshell desktop mode.

---

## Multi-Monitor Mechanics

When your MacBook is connected to one or more external displays:
1. **The built-in MacBook display** features a hardware notch that can occlude status bar items.
2. **The external monitor** (e.g., Apple Studio Display or standard 4K screen) features a continuous, uninterrupted menu bar with no hardware obstruction.

---

## Per-Display Intelligent Detection

Traaay dynamically listens for display geometry changes (`NSApplicationDidChangeScreenParametersNotification`).

For each connected screen, Traaay inspects hardware metrics via `NSScreen`:
- Checks `safeAreaInsets.top` and the presence of `auxiliaryTopLeftArea` / `auxiliaryTopRightArea`.
- If the current screen is an external display without a notch, **no icons are deemed occluded**.

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

When closing your MacBook lid to work exclusively on an external monitor, Traaay immediately detects that the internal screen has turned off and recalibrates all geometry to match the external monitor.
