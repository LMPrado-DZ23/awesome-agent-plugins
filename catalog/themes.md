# Themes & Appearance

[← Back to the index](../README.md)

> This page is generated from `data/entries/` — do not edit by hand.

- [Wallpaper Engine background player](#dsh-dsh-wallpaper-engine) — Plays local Wallpaper Engine Video and Web wallpapers behind the chat (Scene wallpapers render as static frame…
- [All-in-one skin and wallpaper suite](#dsh-dsh-dream-skin) — Adds 8 built-in themes plus a translucent wallpaper with adjustable opacity and blur, a per-user accent color,…
- [Bloom Morandi OKLCH theme](#dsh-dsh-bloom-theme) — Ten Morandi-toned color variants (mist, cinnabar, petal, ripple, sage, stone, lapis, amber, aurora, lavender) …
- [VTuber companion theme](#dsh-dsh-joi-channel-theme) — A two-suit VTuber theme built around the Joi character: separate light/dark token sets, a standing portrait, c…
- [Solarized and Selenized theme](#dsh-solarized-dsh-theme) — The classic low-contrast Solarized palette plus Selenized, its refined take, each with dark and light variants…
- [Windows XP Luna desktop skin](#dsh-dsh-client-ui-theme-xp) — Recreates the Windows XP Luna desktop inside the DSH Web UI, with a floating window manager, taskbar, desktop …
- [Neumorphic theme](#dsh-dsh-neu-theme) — Neumorphic light and dark palettes with ambient lighting, material shadows, grain texture, frosted-glass surfa…
- [Dracula theme](#dsh-dsh-dracula-theme) — The classic Dracula dark palette plus a Soft variant, registered into the native DSH theme runtime with one-cl…

<a id="dsh-dsh-wallpaper-engine"></a>

### Wallpaper Engine background player

[elysia395/dsh-wallpaper-engine](https://github.com/elysia395/dsh-wallpaper-engine) — `Native plugin` · ★ 303 · License: MIT · Works with: DeepSeek Harness only

Plays local Wallpaper Engine Video and Web wallpapers behind the chat (Scene wallpapers render as static frames), with content-rating and type filters, custom uploads, and an iOS-style liquid-glass settings window. Requires DSH 0.1.5-rc.1+ and dsh-better-sidebar 0.19.0+.

**Alternatives:**

- [d-dev0101/open-sea-skin](https://github.com/d-dev0101/open-sea-skin) (★ 378) — Renders a real-time WebGPU animated ocean scene with wave, daylight, and glass controls instead of pre-recorded wallpaper files.

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:elysia395/dsh-wallpaper-engine
```

</details>

<a id="dsh-dsh-dream-skin"></a>

### All-in-one skin and wallpaper suite

[RevolutionLA/dsh-dream-skin](https://github.com/RevolutionLA/dsh-dream-skin) — `Native plugin` · ★ 175 · License: MIT · Works with: DeepSeek Harness only

Adds 8 built-in themes plus a translucent wallpaper with adjustable opacity and blur, a per-user accent color, and shareable theme-pack import/export with favorites and a random surprise-me picker, native to DSH's own theme system.

**Alternatives:**

- [NoNameLeGo/dsh-catppuccin-theme](https://github.com/NoNameLeGo/dsh-catppuccin-theme) (★ 41) — Adds the official 4-variant Catppuccin palette with adjustable frosted glass across 5 UI regions.
- [Tkingxiao/dsh-any-background](https://github.com/Tkingxiao/dsh-any-background) (★ 33) — Auto-switches text to light or dark based on extracted wallpaper colors, with per-area blur across 6 regions.
- [TQSY114514/dsh-ui-appearance](https://github.com/TQSY114514/dsh-ui-appearance) (★ 14) — Bundles full color-palette theming together with video wallpaper backgrounds in one appearance panel.
- [mux9056-bot/dsh-theme](https://github.com/mux9056-bot/dsh-theme) (★ 3) — Ships 30 drop-in CSS theme packs with light/dark variants, manageable through a programmatic API.

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:RevolutionLA/dsh-dream-skin
```

</details>

<a id="dsh-dsh-bloom-theme"></a>

### Bloom Morandi OKLCH theme

[webkubor/dsh-bloom-theme](https://github.com/webkubor/dsh-bloom-theme) — `Native plugin` · ★ 37 · License: MIT · Works with: DeepSeek Harness only

Ten Morandi-toned color variants (mist, cinnabar, petal, ripple, sage, stone, lapis, amber, aurora, lavender) built on the OKLCH color space so light and dark stay perceptually even, switchable from the top bar, with every foreground/background pair meeting WCAG AA or better.

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:webkubor/dsh-bloom-theme
```

</details>

<a id="dsh-dsh-joi-channel-theme"></a>

### VTuber companion theme

[tpmoonchefryan/dsh-joi-channel-theme](https://github.com/tpmoonchefryan/dsh-joi-channel-theme) — `Native plugin` · ★ 18 · License: MIT · Works with: DeepSeek Harness only

A two-suit VTuber theme built around the Joi character: separate light/dark token sets, a standing portrait, chibi companions above the composer that follow turn state, a duo sidebar mark, and a mandarin-shaped context meter. A third card restores the stock look.

**Alternatives:**

- [Small-tailqwq/dsh-deep-whale#maid-atelier](https://github.com/Small-tailqwq/dsh-deep-whale/tree/main/maid-atelier) — Offers a generic whale-girl skin series instead of the fixed Joi character pair.

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:tpmoonchefryan/dsh-joi-channel-theme
```

</details>

<a id="dsh-solarized-dsh-theme"></a>

### Solarized and Selenized theme

[zhijun-dai/Solarized-dsh-theme](https://github.com/zhijun-dai/Solarized-dsh-theme) — `Native plugin` · ★ 7 · License: see repo · Works with: DeepSeek Harness only

The classic low-contrast Solarized palette plus Selenized, its refined take, each with dark and light variants built for long sessions with canonical syntax colors.

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:zhijun-dai/Solarized-dsh-theme
```

</details>

<a id="dsh-dsh-client-ui-theme-xp"></a>

### Windows XP Luna desktop skin

[SamizuHM/dsh-client-ui-theme-xp](https://github.com/SamizuHM/dsh-client-ui-theme-xp) — `Native plugin` · ★ 7 · License: MIT · Works with: DeepSeek Harness only

Recreates the Windows XP Luna desktop inside the DSH Web UI, with a floating window manager, taskbar, desktop icons, and the era-accurate Luna skin.

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:SamizuHM/dsh-client-ui-theme-xp
```

</details>

<a id="dsh-dsh-neu-theme"></a>

### Neumorphic theme

[Lhy723/dsh-neu-theme](https://github.com/Lhy723/dsh-neu-theme) — `Native plugin` · ★ 6 · License: MIT · Works with: DeepSeek Harness only

Neumorphic light and dark palettes with ambient lighting, material shadows, grain texture, frosted-glass surfaces, and micro-interactions.

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:Lhy723/dsh-neu-theme
```

</details>

<a id="dsh-dsh-dracula-theme"></a>

### Dracula theme

[ossFrankFrank/dsh-dracula-theme](https://github.com/ossFrankFrank/dsh-dracula-theme) — `Native plugin` · ★ 2 · License: MIT · Works with: DeepSeek Harness only

The classic Dracula dark palette plus a Soft variant, registered into the native DSH theme runtime with one-click switching and a persisted choice.

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:ossFrankFrank/dsh-dracula-theme
```

</details>
