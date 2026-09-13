# Introduction & Vision

**Traaay** is a macOS utility engineered to solve the growing clutter of modern menu bars, magnified by the introduction of the hardware **Notch** on modern MacBooks.

---

## The Observation: Invisible Clutter

On macOS, background apps routinely install menu bar status items: cloud syncing, audio switchers, VPNs, calendars, messengers, system monitors, and more.

This creates two critical pain points:
1. **Visual Overload**: A crowded menu bar degrades focus and encroaches upon the active application menus.
2. **The MacBook Notch Trap**: macOS silently hides menu bar icons that extend under the physical screen notch. Users have no built-in way of knowing which apps are running, let alone interacting with them without quitting other utilities.

---

## The Traaay Approach: The 3 Strata Architecture

Traaay builds upon three synergistic pillars:

```
┌────────────────────────────────────────────────────────┐
│  STRATA 1 (Glacier Cyan #38BDF8)                       │
│  Visibility & Demarcation: The Foldable Separator      │
├────────────────────────────────────────────────────────┤
│  STRATA 2 (Electric Blue #3B82F6)                      │
│  Control & Awareness: Notch Detection & Amber Badges   │
├────────────────────────────────────────────────────────┤
│  STRATA 3 (Soft Mint #34D399)                          │
│  Frictionless Access: Floating Palette & Direct Clicks │
└────────────────────────────────────────────────────────┘
```

1. **Strata 1 — Clarity & Separation**: A sleek separator that folds away secondary menu bar items. Only essential tools stay in sight, while the rest remains one click away.
2. **Strata 2 — Notch Awareness**: Traaay monitors menu bar item coordinates in real-time against the screen notch occlusion rect. Hidden icons are flagged with distinct <span class="badge-notch">amber dots</span>.
3. **Strata 3 — Frictionless Access**: The compact **Top Traaay** floating palette gathers, groups, and triggers all status items via direct clicks, right-clicks, or `⌘+Click`, even if physically hidden behind the notch.

---

<div class="screenshot-frame">
  <img src="/images/traaay-top-strip.png" alt="Top Traaay strip with notch indicators" />
  <div class="screenshot-caption">The Top Traaay compact palette highlights items obscured by the hardware notch with amber warning badges.</div>
</div>

## Next Steps

- [Getting Started & Setup](./getting-started): Install Traaay and configure required system permissions.
- [Smart Menu Bar Separator](./separator): Learn how folding and item reordering works.
- [MacBook Notch Handling](./notch): Understand how Traaay calculates occlusion and prevents void clicks.
