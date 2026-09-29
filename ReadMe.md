# Art Programs: a version control practice site

A small static website about digital art programs. Built to practice Git, GitHub, and
GitHub Pages.

Live site: <https://baamelia500-prog.github.io/web-version-control-starter-project/>

## Files

| File             | What it is                                                   |
| ---------------- | ------------------------------------------------------------ |
| `index.html`     | Home page                                                    |
| `programs.html`  | Free and paid programs, with two detail cards                 |
| `about.html`     | What these programs are, and why comparing them helps         |
| `nav.html`       | The menu. **One copy.** Every page loads this file.           |
| `js/include.js`  | Puts `nav.html` into each page                                |
| `style.css`      | All colors, sizes, and text styling                          |

## How the shared menu works

The menu lives in `nav.html` only. Each page has two lines that pull it in:

```html
<div id="site-nav"></div>
<script src="js/include.js"></script>
```

To add a link or change the menu, edit `nav.html`. All three pages update.

## How to change the colors

Open `style.css`. Every color is a variable in the `:root` block at the top:

```css
:root {
    --page-bg: rgb(245, 194, 224);
    --page-text: #300111;
    --nav-bg: #300111;
    --accent: #8c1f52;
}
```

Change a value once and the whole site follows.

## First-time setup after cloning

Open the folder in VS Code. It asks whether to install the recommended
extensions. Say yes.

The list lives in `.vscode/extensions.json`. To see it again later, open the
Extensions panel and filter by `@recommended`.

**Live Server is the one you cannot skip.** The rest are conveniences.

## How to preview it on your computer

`js/include.js` uses `fetch()`, which needs a web server. Opening the `.html` file
straight from the folder shows the page with no menu.

1. Install the **Live Server** extension in VS Code.
2. Right-click `index.html`.
3. Choose **Open with Live Server**.

GitHub Pages is a web server, so the menu works there with no extra setup.

## How to publish a change

```bash
git add .
git commit -m "Describe the change"
git push
```

GitHub Pages rebuilds in about a minute. If the site still looks old, it is your browser
cache: reload with `Ctrl+Shift+R`, or open the URL in a private window.
