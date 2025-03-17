
import React from 'react';
import { Paintbrush, Layout, Smartphone, Repeat, Code } from 'lucide-react';
import { Feature } from '@/components/FeatureGrid';
import { Framework } from '@/components/FrameworkShowcase';

// CSS Features
export const cssFeatures: Feature[] = [
  {
    title: "Styling",
    description: "CSS controls the visual presentation of HTML elements through properties and values.",
    icon: <Paintbrush size={24} />
  },
  {
    title: "Layout",
    description: "CSS provides tools for complex layouts including Flexbox and Grid systems.",
    icon: <Layout size={24} />
  },
  {
    title: "Responsive Design",
    description: "Media queries and flexible units allow content to adapt to different screen sizes.",
    icon: <Smartphone size={24} />
  },
  {
    title: "Animations",
    description: "CSS transitions and animations create dynamic visual effects without JavaScript.",
    icon: <Repeat size={24} />
  },
  {
    title: "Modularity",
    description: "CSS methodologies like BEM and CSS-in-JS allow for scalable, maintainable stylesheets.",
    icon: <Code size={24} />
  }
];

// CSS Frameworks
export const cssFrameworks: Framework[] = [
  {
    name: "Bootstrap",
    description: "Popular responsive framework with pre-built components and a grid system.",
    examples: ["Grid system", "Ready-to-use components", "Utility classes"],
    codeExample: '<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">\n\n<div class="container">\n  <div class="row">\n    <div class="col-md-6">Column 1</div>\n    <div class="col-md-6">Column 2</div>\n  </div>\n</div>'
  },
  {
    name: "Tailwind CSS",
    description: "Utility-first CSS framework for rapidly building custom designs.",
    examples: ["Utility classes", "JIT compiler", "Design system"],
    codeExample: '<div class="flex items-center justify-between p-4 bg-white shadow rounded-lg">\n  <h3 class="text-lg font-medium text-gray-900">Card Title</h3>\n  <button class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">\n    Action\n  </button>\n</div>'
  },
  {
    name: "Bulma",
    description: "Modern CSS framework based on Flexbox with a clean, readable syntax.",
    examples: ["Flexbox-based", "Modular architecture", "No JavaScript"],
    codeExample: '<div class="columns">\n  <div class="column is-half">\n    <div class="card">\n      <div class="card-content">\n        <p class="title">Card title</p>\n        <p class="subtitle">Card subtitle</p>\n      </div>\n    </div>\n  </div>\n</div>'
  },
  {
    name: "Foundation",
    description: "Advanced responsive front-end framework with accessibility features.",
    examples: ["Responsive grid", "Accessibility", "Enterprise focus"],
    codeExample: '<div class="grid-container">\n  <div class="grid-x grid-margin-x">\n    <div class="cell medium-6">Column 1</div>\n    <div class="cell medium-6">Column 2</div>\n  </div>\n</div>'
  },
  {
    name: "SASS/SCSS",
    description: "CSS preprocessor that adds variables, nesting, mixins, and more to CSS.",
    examples: ["Variables", "Nesting", "Mixins", "Functions"],
    codeExample: '$primary-color: #4A90E2;\n\n.button {\n  background-color: $primary-color;\n  &:hover {\n    background-color: darken($primary-color, 10%);\n  }\n  &.large {\n    padding: 1rem 2rem;\n  }\n}'
  }
];

// CSS Code Examples
export const cssExamples = {
  basicStyling: `/* Basic CSS syntax */
selector {
  property: value;
}

/* Selectors */
h1 {
  color: blue;
  font-size: 24px;
  text-align: center;
}

/* Class selectors */
.highlight {
  background-color: yellow;
  padding: 10px;
}

/* ID selectors */
#header {
  background-color: black;
  color: white;
}

/* Combining selectors */
nav ul li a {
  text-decoration: none;
  color: #333;
}

/* Pseudo-classes */
a:hover {
  color: red;
}

button:focus {
  outline: 2px solid blue;
}`,

  responsiveDesign: `/* Media queries for responsive design */
/* Base styles for all devices */
.container {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

/* Styles for tablets and below */
@media (max-width: 768px) {
  .container {
    padding: 15px;
  }
  
  .sidebar {
    display: none;
  }
}

/* Styles for mobile phones */
@media (max-width: 480px) {
  .container {
    padding: 10px;
  }
  
  .nav-menu {
    flex-direction: column;
  }
}

/* Using flexible units */
.flexible-layout {
  display: flex;
  flex-wrap: wrap;
}

.column {
  flex: 1;
  min-width: 300px;
}

/* Responsive images */
img {
  max-width: 100%;
  height: auto;
}`,

  layoutTechniques: `/* Flexbox Layout */
.flex-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}

.flex-item {
  flex: 1 1 300px;
  margin: 10px;
}

/* CSS Grid Layout */
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 20px;
}

.grid-item {
  /* Grid items can span multiple columns/rows */
  grid-column: span 2;
}

/* Modern layout with CSS variables */
:root {
  --spacing-unit: 8px;
  --primary-color: #0077ff;
}

.card {
  padding: calc(var(--spacing-unit) * 2);
  margin-bottom: calc(var(--spacing-unit) * 3);
  border: 1px solid var(--primary-color);
}`
};
