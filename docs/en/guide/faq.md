# FAQ

The situations that come up most often, and what to do about each.

---

## The Accessibility permission won't stick

This is the most common one: you ticked Traaay in System Settings, but the app still behaves as though it has no right to inspect the menu bar.

macOS only re-evaluates that permission when the process launches. In order:

1. **Quit Traaay completely**, then relaunch it. This is usually enough.
2. If nothing changes, use the **Reset permission** button in the configuration panel. Traaay clears its accessibility entry and reopens System Settings so you can grant it cleanly.
3. Untick and re-tick **Traaay** under **Privacy & Security > Accessibility**, then relaunch the app.

> [!NOTE]
> A stale entry after a reinstall is common: macOS sometimes keeps the old grant attached to a copy of the app that no longer exists. The reset handles exactly that case.

---

## Does Traaay launch with my Mac?

Only if you ask it to. Launch at login is an option in the configuration panel, off until you turn it on.

---

## What happens to my icons when I quit Traaay?

They all come back. On quit, Traaay **always unfolds the separator** before stopping: your menu bar returns to its full state, with no icon left trapped behind a fold.

---

## Where are my preferences stored?

In a single file, outside the app:

```
~/.config/traaay/preferences.json
```

It holds your groups, each item's visibility, the separator position, and your chosen language. It survives updates and reinstalls. Deleting it returns Traaay to a fresh state.

---

## How do I uninstall Traaay cleanly?

1. Quit Traaay (right-click the icon, then Quit). Your icons are handed back to the menu bar.
2. Drag **Traaay.app** from Applications to the Trash.
3. To leave nothing behind, remove the preferences folder:
   ```
   rm -rf ~/.config/traaay
   ```
4. Optional: remove the **Traaay** entry under **Privacy & Security > Accessibility**.

---

## I see no amber dots — is something broken?

No, that is the expected behavior in two cases:

- You are working on an **external monitor**, which has no notch: nothing is occluded there, so there is nothing to flag.
- On the built-in display, **no item reaches the notch area**. There is nothing to report.

See [Multi-Display Setup](./multi-screens) for the details.

---

## Does Traaay read what I type?

No. The Accessibility permission is used for two things and nothing else: measuring where menu bar items sit, and replaying the click you just asked for. No keystroke is logged, no application content is read.

---

## My Mac is Intel — can I install Traaay?

Not today. Published builds target **Apple Silicon** (`aarch64`). No Intel build is distributed at this point.

---

## See also

- [Getting Started & Setup](./getting-started)
- [Updates](./updates)
