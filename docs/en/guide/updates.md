# Updates

Traaay can update itself without sending you back to a manual download. This page covers where the command lives, what it does, and what to do when it fails.

---

## Where the command lives

1. **Right-click** the Traaay icon in the menu bar to open the configuration panel.
2. Go to the **Updates** section.
3. The panel shows your installed version, the active channel, and the **Check for updates** button.

> [!IMPORTANT]
> The check is **manual**. Traaay never polls in the background and never interrupts you on its own: nothing happens until you press the button.

---

## The two channels

| Channel | Who it is for | Account required |
| :--- | :--- | :--- |
| **Stable (public)** | Everyone. This is the default channel. | None |
| **Internal (private)** | Development only — unfinished builds. | Yes, via an authenticated `gh` CLI |

The internal channel is listed but stays inactive when the GitHub CLI is not installed: the panel then reads **"gh CLI required"**. That is an expected state, not an error — the stable channel is all a normal install needs.

---

## What happens during an update

Once a new version is accepted, Traaay runs four steps, each shown plainly in the panel:

1. **Download** of the new version's archive.
2. **Signature verification** (minisign). This is the step that proves the archive came from us.
3. **Install** of the new version in place of the old one.
4. **Relaunch** of Traaay, which comes back already up to date.

> [!NOTE]
> If the signature does not match, the install **stops** and the app already on disk is left untouched. An update that cannot be verified is never applied.

---

## If the update fails

- **"Traaay is up to date"** while a newer version exists: you are most likely on the stable channel and that version has not been promoted to public yet. This is normal.
- **Download failure**: check your connection, then run the search again. An interrupted attempt leaves nothing behind.
- **Repeated failure**: [download the latest `.dmg` directly](https://github.com/ArboRithmDev/Traaay/releases/latest) and reinstall over the top. Your preferences survive — they live outside the app, in `~/.config/traaay/preferences.json`.

---

## See also

- [Getting Started & Setup](./getting-started) — first install and system permissions.
- [FAQ](./faq) — uninstalling, permissions, what data is kept.
