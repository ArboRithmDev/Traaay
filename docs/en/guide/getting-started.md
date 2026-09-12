# Getting Started & Setup

Quick start guide for installing, configuring system permissions, and using Traaay on your Mac.

---

## System Requirements

- **Operating System**: macOS 13.0 (Ventura), macOS 14.0 (Sonoma), or macOS 15.0+ (Sequoia).
- **Architecture**: Apple Silicon (M1, M2, M3, M4) or Intel x86_64.
- **System Privileges**: macOS Accessibility permissions (TCC).

---

## Installation

1. Download the latest **Traaay.dmg** release.
2. Open the `.dmg` file and drag **Traaay** into your **Applications** folder.
3. Launch Traaay via Spotlight or your Applications folder.

---

## Configuring Accessibility Permissions (TCC)

To map menu bar items, measure their positions relative to the screen notch, and trigger direct click interactions, macOS requires Accessibility authorization.

1. On first launch, Traaay prompts you to open **System Settings**.
2. Navigate to **Privacy & Security > Accessibility**.
3. Toggle the switch for **Traaay** to grant access.
4. If Traaay was already running, restart it to apply the new permissions immediately.

> [!NOTE]
> Traaay does not log keystrokes or inspect private application content. The Accessibility API (`AXUIElement`) is strictly used to inspect menu bar geometry and synthesize user-initiated clicks.

---

## Status Bar Item & First Contact

Once active, Traaay appears in your macOS menu bar with its signature icon (three horizontal cascading strata).

- **Left Click**: Opens the main configuration panel and item manager.
- **Right Click**: Opens the quick context menu (Preferences, Quit).
- **Hover / Top Screen Edge**: Reveals the floating Top Traaay palette if enabled.

<div class="screenshot-frame">
  <img src="/images/traaay-settings-panel.png" alt="Traaay main settings panel" />
  <div class="screenshot-caption">The main settings panel lets you customize folding rules and review item statuses.</div>
</div>
