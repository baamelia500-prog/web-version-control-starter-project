# Art Programs: a version control practice site

A small static website about digital art programs. Built to practice Git, GitHub, and
GitHub Pages.

Jekyll builds the pages. GitHub Pages runs Jekyll for you, so pushing to `main` publishes
the site.

Live site: <https://baamelia500-prog.github.io/web-version-control-starter-project/>

## Files

| File | What it is |
| ---- | ---------- |
| `index.html` | Home page |
| `programs.html` | Free and paid programs, with two detail cards |
| `about.html` | What these programs are, and why comparing them helps |
| `_layouts/default.html` | The page shell every page is poured into |
| `_includes/nav.html` | The menu. **One copy.** |
| `_data/nav.yml` | The menu links, as data |
| `_data/programs.yml` | The program cards, as data |
| `style.css` | All colors, sizes, and text styling |
| `_config.yml` | Jekyll settings |

## How a page is built

Each page holds only its own content. The part between the `---` lines at the top is
front matter: settings for that page.

```yaml
---
layout: default
slug: about
title: About
heading: About art programs
lead: What these programs do, and why it helps to compare them.
---
```

Jekyll pours that content into `_layouts/default.html`, which supplies the `<head>`, the
menu, and the footer. One line does the menu:

```liquid
{% include nav.html %}
```

Think of the layout as a picture frame. Each page is a different photo, but the frame is
cut once.

## How to change the menu

Edit `_data/nav.yml`. Nothing else.

```yaml
- title: Gallery
  url: gallery.html
  slug: gallery
```

That adds a Gallery link to every page at once. To make the new page show as selected
when you are on it, give it `slug: gallery` in its front matter.

## How to add a program card

Edit `_data/programs.yml`. A new entry becomes a new card, with no HTML to copy.

## How to change the colors

Open `style.css`. Every color is a variable in the `:root` block at the top:

```css
:root {
    --page-bg: rgb(245, 194, 211);
    --nav-bg: #934c61;
    --page-text: #300111;
    --accent: #8c1f52;
}
```

Change a value once and the whole site follows.

## First-time setup after cloning

Open the folder in VS Code. It asks whether to install the recommended extensions. Say
yes. The list lives in `.vscode/extensions.json`.

Two more shared files come with the repo:

| File | What it does |
| ---- | ------------ |
| `.vscode/settings.json` | Paints this window purple, and draws the 100 column ruler |
| `cspell.json` | Project words such as `MediBang`, so the spell checker stays quiet |

Your own `launch.json` and any other `.vscode` file stay private.

## How to preview it on your computer

Jekyll needs Ruby. Install Ruby with Devkit from <https://rubyinstaller.org>, then:

```bash
gem install bundler
bundle install
bundle exec jekyll serve
```

Open <http://localhost:4000>.

**Live Server will not work here.** It serves the files as they sit on disk, so you would
see the raw `{% include %}` tag instead of the menu. Only Jekyll turns the tags into HTML.

## How to publish a change

```bash
git add .
git commit -m "Describe the change"
git push
```

GitHub Pages rebuilds in about a minute. If the site still looks old, it is your browser
cache: reload with `Ctrl+Shift+R`, or open the URL in a private window.
