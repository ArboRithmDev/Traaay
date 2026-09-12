# MacBook Notch Handling

Intelligent detection and handling of the physical MacBook screen notch constitutes **Strata 2** of Traaay (Electric Blue `#3B82F6`).

---

## The Notch Conundrum on macOS

On MacBook Pro (14" and 16") and MacBook Air (13.6" and 15.3") with Apple Silicon, the camera cutout occupies a central black rectangle at the top of the display.

When numerous status items accumulate on the right-hand side of the menu bar:
- macOS refuses to render icons across or under the physical cutout.
- Instead, macOS **silently hides** the leftmost status items.
- **Result**: You have no visual confirmation that an app is running, and no direct way to access its controls.

---

## How Traaay Resolves Occlusions

Traaay queries `NSScreen` geometry and accessibility boundaries (`auxiliaryTopLeftArea` and `auxiliaryTopRightArea`) to determine the exact bounding box of each status item relative to the notch.

```
                ┌───────────────┐
                │     NOTCH     │
┌───────────────┴───────────────┴─────────────────────────────┐
│ App Menus       [⚠️ X] [⚠️ Y]   [Item A] [Item B] [Clock]   │
└─────────────────────────────────────────────────────────────┘
                  ▲ Hidden         ▲ Visible
```

---

## Amber Dots & Context Badges

Whenever Traaay detects that an item is occluded by the screen cutout:

1. **In the Top Traaay Palette**: An <span class="badge-notch">amber dot</span> appears on the top corner of the icon.
2. **In the Settings Panel**: An explicit `[Under Notch]` badge and amber dot indicate that direct clicks are currently blocked.

<div class="screenshot-frame">
  <img src="/images/traaay-settings-panel.png" alt="Under notch indicators in settings" />
  <div class="screenshot-caption">Every item concealed under the notch is clearly flagged with an amber badge in settings.</div>
</div>

---

## Preventing Blind Clicks

Unlike unmanaged tools that attempt to blindly click theoretical coordinates under the notch:
- Standard clicks on occluded items **do not teleport the cursor into the empty notch space**.
- A helpful **system notification** warns you that the item cannot be triggered directly while obscured.
- To access the app:
  - Fold away less urgent items via the [Smart Separator](./separator) so the target item slides back into the visible region.
  - Or use `⌘+Click` from the palette to foreground the application directly.

---

## Strict Display Isolation

Notch warnings and amber indicators are **only rendered on the display that physically contains a notch**.

When an external monitor is active (Studio Display, external 4K/5K monitor):
- Status items have unrestricted horizontal width.
- Traaay turns off notch badges completely for that display.
- See [Multi-Display Setup](./multi-screens) for more details.
