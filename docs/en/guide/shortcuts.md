# Gestures & Shortcuts

To ensure a seamless, uninterrupted workflow, Traaay provides a consistent interaction matrix from both the floating palette and the menu bar.

---

## Interaction Matrix in Top Traaay

| Gesture / Key | Standard Item (Visible) | Item Under Notch (⚠️) |
| :--- | :--- | :--- |
| **Single Left Click** | Teleports cursor and reveals native status item menu | **Blocked**: No cursor jump + notification alert |
| **Right Click** | Teleports cursor and opens secondary context menu | **Blocked**: Notified that item is occluded by notch |
| **⌘ + Left Click** | Brings the parent application window to the foreground | **Allowed**: Activates app window directly without moving cursor |

---

## Interaction Breakdown

### 1. Left Click: Teleportation & Native Trigger
Clicking any visible item in the Top Traaay palette computes the absolute coordinate of the menu bar item and dispatches a synthetic mouse event. The app's native menu pops open instantaneously.

<div class="screenshot-frame">
  <img src="/images/traaay-native-menu.png" alt="Native menu item triggered via Traaay" />
  <div class="screenshot-caption">Instantaneous native menu deployment powered by Traaay pointer teleportation.</div>
</div>

### 2. Right Click: Alternative Context Menu
Many menu bar utilities provide dual actions (e.g., left-click for quick actions and right-click for Preferences / Quit). Right-clicking in Traaay faithfully triggers that secondary action.

### 3. ⌘ + Click: Direct Application Focus
If you want to open the main window of an app instead of its status menu, hold down the **⌘ (Command)** key while clicking.

This works **even if the icon is hidden under the notch**, because it communicates with macOS via `NSRunningApplication`, bypassing menu bar geometric constraints entirely.

---

## Preventing Cursor Disorientation

In earlier tools or competing utilities, clicking an icon occluded by the notch teleported the mouse into the middle of the black camera cutout, causing erratic mis-clicks or lost focus.

With Traaay:
- **If the item is occluded**: the cursor never moves.
- An alert explains that the item is currently behind the physical notch.
- To reveal it, fold away secondary items with the separator or use `⌘+Click`.
