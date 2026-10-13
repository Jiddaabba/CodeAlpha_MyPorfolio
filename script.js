
// =========================================
// JIDDA PORTFOLIO
// 1. Project data
// 2. Render and filter projects
// 3. Mobile navigation
// 4. Theme toggle
// 5. Resume printing and footer year
// =========================================

"use strict";

// 1. PROJECT DATA
// Replace demo and GitHub URLs with your actual project links.
// Leave a URL as "#" until you have a real destination.

const projects = [
  {
    title: "JiddaBeats Music Player",
    category: "javascript",
    icon: "♫",
    description:
      "A responsive music player with playback controls, search, playlists, favorites, shuffle, repeat and theme switching.",
    tags: ["HTML", "CSS", "JavaScript", "Audio"],
    demo: "#",
    github: "#"
  },
  {
    title: "Jidda's Calculator",
    category: "javascript",
    icon: "±",
    description:
      "A branded calculator focused on clear results, keyboard input, responsive controls and reliable mathematical operations.",
    tags: ["HTML", "CSS", "JavaScript"],
    demo: "#",
    github: "#"
  },
  {
    title: "FrameSpace Image Gallery",
    category: "javascript",
    icon: "▦",
    description:
      "An image gallery concept featuring categories, search, fullscreen viewing, favorites and a modern visual layout.",
    tags: ["HTML", "CSS", "JavaScript", "Gallery"],
    demo: "#",
    github: "#"
  },
  {
    title: "Personal Portfolio",
    category: "web",
    icon: "</>",
    description:
      "A personal developer website presenting my skills, projects, education and contact information in one place.",
    tags: ["HTML", "CSS", "JavaScript", "Responsive"],
    demo: "#",
    github: "#"
  },
  {
    title: "Jeeds Dry Cleaning Service",
    category: "web",
    icon: "✦",
    description:
      "A business website concept for laundry, pressing, fabric care and pickup-and-delivery services.",
    tags: ["HTML", "CSS", "JavaScript", "Business"],
    demo: "#",
    github: "#"
  },
  {
    title: "Medium-Inspired Landing Page",
    category: "ui",
    icon: "M",
    description:
      "A clean editorial landing page concept emphasizing readable typography, content hierarchy and responsive design.",
    tags: ["HTML", "CSS", "UI Design"],
    demo: "#",
    github: "#"
  },
  {
    title: "Student Data Page",
    category: "ui",
    icon: "▤",
    description:
      "A student information page concept with structured data tables and navigation between page sections.",
    tags: ["HTML", "CSS", "Tables", "Responsive"],
    demo: "#",
    github: "#"
  }
];

// 2. RENDER AND FILTER PROJECTS

const projectsGrid = document.querySelector("#projects-grid");
const projectSearch = document.querySelector("#project-search");
const emptyState = document.querySelector("#empty-state");
const filterButtons = document.querySelectorAll(".filter-button");

let activeFilter = "all";

function createProjectCard(project) {
  const article = document.createElement("article");
  article.className = "project-card";

  const art = document.createElement("div");
  art.className = "project-art";
  art.setAttribute("aria-hidden", "true");

  const artIcon = document.createElement("span");
  artIcon.className = "project-art-icon";
  artIcon.textContent = project.icon;
  art.appendChild(artIcon);

  const body = document.createElement("div");
  body.className = "project-card-body";

  const category = document.createElement("span");
  category.className = "project-category";
  category.textContent = getCategoryLabel(project.category);

  const title = document.createElement("h3");
  title.textContent = project.title;

  const description = document.createElement("p");
  description.className = "project-description";
  description.textContent = project.description;

  const tags = document.createElement("div");
  tags.className = "project-tags";

  project.tags.forEach((tag) => {
    const tagElement = document.createElement("span");
    tagElement.className = "project-tag";
    tagElement.textContent = tag;
    tags.appendChild(tagElement);
  });

  const links = document.createElement("div");
  links.className = "project-links";

  addProjectLink(links, project.demo, "Live Demo ↗");
  addProjectLink(links, project.github, "Source Code ↗");

  body.append(category, title, description, tags, links);
  article.append(art, body);

  return article;
}

function getCategoryLabel(category) {
  const labels = {
    javascript: "JavaScript",
    ui: "UI & Design",
    web: "Website"
  };

  return labels[category] || "Project";
}

function addProjectLink(container, url, label) {
  const link = document.createElement("a");
  link.textContent = label;

  if (url && url !== "#") {
    link.href = url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
  } else {
    // Prevent broken links while a real URL is not available.
    link.href = "#projects";
    link.className = "disabled-link";
    link.title = "Edit script.js to add the real project URL";
    link.setAttribute("aria-label", `${label} for this project is not configured yet`);
    link.addEventListener("click", (event) => {
      event.preventDefault();
      alert("This link has not been configured yet. Add the real URL in script.js.");
    });
  }

  container.appendChild(link);
}

function renderProjects() {
  if (!projectsGrid) return;

  const searchTerm = projectSearch
    ? projectSearch.value.trim().toLowerCase()
    : "";

  const filteredProjects = projects.filter((project) => {
    const matchesCategory =
      activeFilter === "all" || project.category === activeFilter;

    const searchableText = [
      project.title,
      project.description,
      project.category,
      ...project.tags
    ].join(" ").toLowerCase();

    const matchesSearch = searchableText.includes(searchTerm);

    return matchesCategory && matchesSearch;
  });

  projectsGrid.replaceChildren();

  filteredProjects.forEach((project) => {
    projectsGrid.appendChild(createProjectCard(project));
  });

  if (emptyState) {
    emptyState.hidden = filteredProjects.length > 0;
  }
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter || "all";

    filterButtons.forEach((item) => {
      const isActive = item === button;
      item.classList.toggle("active", isActive);
      item.setAttribute("aria-pressed", String(isActive));
    });

    renderProjects();
  });
});

if (projectSearch) {
  projectSearch.addEventListener("input", renderProjects);
}

// 3. MOBILE NAVIGATION

const menuToggle = document.querySelector("#menu-toggle");
const navLinks = document.querySelector("#nav-links");

function closeMenu() {
  if (!menuToggle || !navLinks) return;

  navLinks.classList.remove("is-open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Open navigation menu");
}

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("is-open");

    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute(
      "aria-label",
      isOpen ? "Close navigation menu" : "Open navigation menu"
    );
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
    }
  });

  document.addEventListener("click", (event) => {
    if (
      navLinks.classList.contains("is-open") &&
      !navLinks.contains(event.target) &&
      !menuToggle.contains(event.target)
    ) {
      closeMenu();
    }
  });
}

// 4. THEME TOGGLE

const themeToggle = document.querySelector("#theme-toggle");
const themeIcon = document.querySelector("#theme-icon");

function setTheme(theme) {
  const isLight = theme === "light";

  document.body.classList.toggle("light-theme", isLight);

  if (themeIcon) {
    themeIcon.textContent = isLight ? "☾" : "☀";
  }

  if (themeToggle) {
    themeToggle.setAttribute(
      "aria-label",
      isLight ? "Switch to dark theme" : "Switch to light theme"
    );
    themeToggle.title = isLight ? "Switch to dark theme" : "Switch to light theme";
  }
}

function getSavedTheme() {
  try {
    return localStorage.getItem("jidda-portfolio-theme");
  } catch (error) {
    return null;
  }
}

function saveTheme(theme) {
  try {
    localStorage.setItem("jidda-portfolio-theme", theme);
  } catch (error) {
    // Theme switching still works if browser storage is unavailable.
  }
}

const savedTheme = getSavedTheme();
setTheme(savedTheme === "light" ? "light" : "dark");

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const isLight = document.body.classList.contains("light-theme");
    const nextTheme = isLight ? "dark" : "light";

    setTheme(nextTheme);
    saveTheme(nextTheme);
  });
}

// 5. RESUME PRINTING AND FOOTER YEAR

const printResumeButton = document.querySelector("#print-resume");

if (printResumeButton) {
  printResumeButton.addEventListener("click", () => {
    window.print();
  });
}

const currentYear = document.querySelector("#current-year");

if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}

// Initialize project cards.
renderProjects();
