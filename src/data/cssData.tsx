
import React from 'react';
import { Paintbrush, Layout, Smartphone, Repeat, Code } from 'lucide-react';
import { Feature } from '@/components/FeatureGrid';
import { Framework } from '@/components/FrameworkShowcase';

// CSS Features
export const cssFeatures: Feature[] = [
  {
    title: "Gestaltung",
    description: "CSS steuert die visuelle Darstellung von HTML-Elementen durch Eigenschaften und Werte.",
    icon: <Paintbrush size={24} />
  },
  {
    title: "Layout",
    description: "CSS bietet Werkzeuge für komplexe Layouts, einschließlich Flexbox und Grid-Systeme.",
    icon: <Layout size={24} />
  },
  {
    title: "Responsives Design",
    description: "Media Queries und flexible Einheiten ermöglichen die Anpassung von Inhalten an verschiedene Bildschirmgrößen.",
    icon: <Smartphone size={24} />
  },
  {
    title: "Animationen",
    description: "CSS-Übergänge und Animationen erzeugen dynamische visuelle Effekte ohne JavaScript.",
    icon: <Repeat size={24} />
  },
  {
    title: "Modularität",
    description: "CSS-Methodologien wie BEM und CSS-in-JS ermöglichen skalierbare, wartbare Stylesheets.",
    icon: <Code size={24} />
  }
];

// CSS Frameworks
export const cssFrameworks: Framework[] = [
  {
    name: "Bootstrap",
    description: "Beliebtes responsives Framework mit vorgefertigten Komponenten und einem Grid-System.",
    examples: ["Grid-System", "Einsatzbereite Komponenten", "Utility-Klassen"],
    codeExample: '<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">\n\n<div class="container">\n  <div class="row">\n    <div class="col-md-6">Spalte 1</div>\n    <div class="col-md-6">Spalte 2</div>\n  </div>\n</div>'
  },
  {
    name: "Tailwind CSS",
    description: "Utility-First CSS-Framework zum schnellen Erstellen benutzerdefinierter Designs.",
    examples: ["Utility-Klassen", "JIT-Compiler", "Design-System"],
    codeExample: '<div class="flex items-center justify-between p-4 bg-white shadow rounded-lg">\n  <h3 class="text-lg font-medium text-gray-900">Karten-Titel</h3>\n  <button class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">\n    Aktion\n  </button>\n</div>'
  },
  {
    name: "Bulma",
    description: "Modernes CSS-Framework basierend auf Flexbox mit einer sauberen, lesbaren Syntax.",
    examples: ["Flexbox-basiert", "Modulare Architektur", "Kein JavaScript"],
    codeExample: '<div class="columns">\n  <div class="column is-half">\n    <div class="card">\n      <div class="card-content">\n        <p class="title">Karten-Titel</p>\n        <p class="subtitle">Karten-Untertitel</p>\n      </div>\n    </div>\n  </div>\n</div>'
  },
  {
    name: "Foundation",
    description: "Fortschrittliches responsives Frontend-Framework mit Zugänglichkeitsfunktionen.",
    examples: ["Responsives Grid", "Barrierefreiheit", "Unternehmensfokus"],
    codeExample: '<div class="grid-container">\n  <div class="grid-x grid-margin-x">\n    <div class="cell medium-6">Spalte 1</div>\n    <div class="cell medium-6">Spalte 2</div>\n  </div>\n</div>'
  },
  {
    name: "SASS/SCSS",
    description: "CSS-Präprozessor, der Variablen, Verschachtelung, Mixins und mehr zu CSS hinzufügt.",
    examples: ["Variablen", "Verschachtelung", "Mixins", "Funktionen"],
    codeExample: '$primary-color: #4A90E2;\n\n.button {\n  background-color: $primary-color;\n  &:hover {\n    background-color: darken($primary-color, 10%);\n  }\n  &.large {\n    padding: 1rem 2rem;\n  }\n}'
  }
];

// CSS Code Examples
export const cssExamples = {
  basicStyling: `/* Grundlegende CSS-Syntax */
selector {
  property: value;
}

/* Selektoren */
h1 {
  color: blue;
  font-size: 24px;
  text-align: center;
}

/* Klassen-Selektoren */
.highlight {
  background-color: yellow;
  padding: 10px;
}

/* ID-Selektoren */
#header {
  background-color: black;
  color: white;
}

/* Kombinieren von Selektoren */
nav ul li a {
  text-decoration: none;
  color: #333;
}

/* Pseudo-Klassen */
a:hover {
  color: red;
}

button:focus {
  outline: 2px solid blue;
}`,

  responsiveDesign: `/* Media Queries für responsives Design */
/* Grundstile für alle Geräte */
.container {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

/* Stile für Tablets und kleiner */
@media (max-width: 768px) {
  .container {
    padding: 15px;
  }
  
  .sidebar {
    display: none;
  }
}

/* Stile für Mobiltelefone */
@media (max-width: 480px) {
  .container {
    padding: 10px;
  }
  
  .nav-menu {
    flex-direction: column;
  }
}

/* Verwendung flexibler Einheiten */
.flexible-layout {
  display: flex;
  flex-wrap: wrap;
}

.column {
  flex: 1;
  min-width: 300px;
}

/* Responsive Bilder */
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
  /* Grid-Elemente können mehrere Spalten/Zeilen umfassen */
  grid-column: span 2;
}

/* Modernes Layout mit CSS-Variablen */
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
