
# Abubakar Jidda Abba — Personal Portfolio

A responsive personal portfolio built with **HTML, CSS and vanilla JavaScript**.

The website presents my frontend development journey, skills, selected projects, educational background, certifications and contact information.

## Features

- Modern dark theme with a light-theme option
- Responsive layouts for mobile, tablet and desktop
- Mobile navigation menu
- Project cards generated from JavaScript data
- Project category filters
- Live project search
- Education and certification section
- Contact links and email shortcut
- Print-friendly page layout for saving as PDF
- Accessible navigation labels and keyboard focus indicators
- Theme preference saved in browser storage
- No frontend frameworks or package installation required

## Project structure

Keep these four files together in one folder:

```text
jidda-portfolio/
├── index.html
├── style.css
├── script.js
└── README.md
```

Do not rename the files unless you also update their references in `index.html`.

## How to run the website

1. Create a folder named `jidda-portfolio`.
2. Create the four files listed above inside the folder.
3. Copy the appropriate code into each file.
4. Save all files.
5. Open `index.html` in your browser.

You can also use a code editor with a local preview or Live Server extension.

An internet connection is needed to load the Google Fonts used by the design. The website's main structure, styling and JavaScript do not require a backend.

## How to edit your projects

Open `script.js` and find the `projects` array near the top.

Each project has these properties:

- `title`: project name
- `category`: `javascript`, `ui` or `web`
- `icon`: short symbol displayed on the project card
- `description`: what the project does
- `tags`: technologies or keywords
- `demo`: URL of the live project
- `github`: URL of the source repository

Example:

```javascript
{
  title: "My New Website",
  category: "web",
  icon: "</>",
  description: "A responsive website I built using HTML, CSS and JavaScript.",
  tags: ["HTML", "CSS", "JavaScript"],
  demo: "https://your-username.github.io/your-project/",
  github: "https://github.com/your-username/your-project"
}
```

Replace the example links with your actual URLs. Do not publish fake or unverified project links.

Use `"#"` temporarily if a project does not yet have a live demo or public repository.

### Available project categories

- `javascript` — projects with JavaScript functionality
- `ui` — interface and design projects
- `web` — websites and landing pages

To add a project, copy one object inside the `projects` array, add a comma between objects, and update its information.

## How to update your personal information

Open `index.html` and search for the relevant text.

You can update:

- Your introduction and biography
- Education and certifications
- Email address
- GitHub, LinkedIn and X profile links
- Project descriptions and skill descriptions

Check all personal details for accuracy before publishing.

## How to customize the design

Open `style.css`.

At the beginning of the file, the `:root` section contains the main design variables:

- `--bg` — page background
- `--surface` — card background
- `--text` — main text
- `--muted` — secondary text
- `--accent` — main accent colour
- `--purple` — secondary accent colour
- `--container` — maximum content width

Change these values to customize the portfolio's appearance.

## How to publish with GitHub Pages

1. Sign in to GitHub.
2. Create a repository named `jidda-portfolio`.
3. Upload `index.html`, `style.css`, `script.js` and `README.md` to the repository root.
4. Open the repository's **Settings**.
5. Select **Pages**.
6. Under the build and deployment settings, choose **Deploy from a branch**.
7. Select the `main` branch and `/(root)` folder.
8. Click **Save**.
9. Wait for GitHub Pages to publish the website.
10. Open the published URL and test the links and layout.

The usual URL format is:

`https://abbajidda.github.io/jidda-portfolio/`

This URL will work only if your GitHub username, repository name and Pages settings match those values.

## Testing checklist

Before publishing, verify the following:

- [ ] All navigation links move to the correct section.
- [ ] The mobile navigation opens and closes.
- [ ] Dark and light themes work.
- [ ] The theme preference is retained after reloading, when browser storage is available.
- [ ] Project filters work.
- [ ] Project search works.
- [ ] Live demo links open the correct websites.
- [ ] GitHub links open the correct repositories.
- [ ] The email link opens an email application.
- [ ] The layout works on mobile, tablet and desktop screens.
- [ ] There is no unwanted horizontal scrolling.
- [ ] Education, certification and contact details are accurate.
- [ ] Browser developer tools show no JavaScript errors.

## Technologies

- HTML5
- CSS3
- Vanilla JavaScript
- Google Fonts
- GitHub Pages

## Limitations

This is a static frontend portfolio. It does not include a backend, database, contact form submission service or server-side authentication.

The email button opens the visitor's email application; it does not send a message directly from the website.

The resume print button prints the page using the browser's print dialog. It is not a separate downloadable CV file.

## Author

**Abubakar Jidda Abba**

- GitHub: https://github.com/abbajidda
- LinkedIn: https://www.linkedin.com/in/jidda-abba-866572438
- X: https://x.com/abbajidda03
- Email: jiddaabubakar2003@gmail.com
