
import React from 'react';
import { 
  Globe, 
  Code, 
  Paintbrush, 
  Braces, 
  Server, 
  Laptop, 
  History, 
  Monitor,
  Smartphone,
  Tablet,
  Layout,
  FileCode,
  Variable,
  CornerDownRight,
  Repeat,
  Function
} from 'lucide-react';
import { TimelineItem } from '@/components/Timeline';
import { Feature } from '@/components/FeatureGrid';
import { Framework } from '@/components/FrameworkShowcase';

// Internet History Timeline
export const internetHistoryItems: TimelineItem[] = [
  {
    year: "1969",
    title: "ARPANET",
    description: "The first computer network, created by the Advanced Research Projects Agency (ARPA), connected four universities."
  },
  {
    year: "1983",
    title: "TCP/IP",
    description: "The standardization of TCP/IP protocols allowed different computer networks to interconnect and communicate."
  },
  {
    year: "1989",
    title: "World Wide Web",
    description: "Tim Berners-Lee invented the World Wide Web (WWW) at CERN, creating the foundation of the modern internet."
  },
  {
    year: "1993",
    title: "NCSA Mosaic",
    description: "The first popular graphical web browser that made the web accessible to non-technical users."
  },
  {
    year: "1995-1998",
    title: "Browser Wars",
    description: "Competition between Netscape Navigator and Internet Explorer drove rapid browser innovation."
  },
  {
    year: "2004-2009",
    title: "Web 2.0",
    description: "The rise of social media, user-generated content, and interactive web applications."
  },
  {
    year: "2010-Present",
    title: "Mobile Web & Cloud",
    description: "Mobile devices become the primary way to access the internet, and cloud services transform web architecture."
  }
];

// HTML Features
export const htmlFeatures: Feature[] = [
  {
    title: "Structure",
    description: "HTML defines the fundamental structure and organization of web content through elements and tags.",
    icon: <Layout size={24} />
  },
  {
    title: "Semantics",
    description: "Semantic HTML elements provide meaning to content, improving accessibility and SEO.",
    icon: <FileCode size={24} />
  },
  {
    title: "Links",
    description: "Hyperlinks connect pages and resources, forming the foundation of web navigation.",
    icon: <Globe size={24} />
  },
  {
    title: "Forms",
    description: "HTML forms enable user input and data collection for interactive web applications.",
    icon: <Code size={24} />
  },
  {
    title: "Media",
    description: "Support for images, video, audio, and other multimedia enriches web content.",
    icon: <Monitor size={24} />
  }
];

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

// JavaScript Features
export const jsFeatures: Feature[] = [
  {
    title: "Interactivity",
    description: "JavaScript enables dynamic behavior and user interactions on web pages.",
    icon: <Laptop size={24} />
  },
  {
    title: "DOM Manipulation",
    description: "JavaScript can manipulate the Document Object Model to change page content and structure.",
    icon: <Code size={24} />
  },
  {
    title: "Asynchronous Processing",
    description: "Fetch API, Promises, and async/await handle asynchronous operations like API calls.",
    icon: <Server size={24} />
  },
  {
    title: "Event Handling",
    description: "JavaScript can respond to user actions like clicks, input, and scrolling.",
    icon: <Braces size={24} />
  },
  {
    title: "Client & Server",
    description: "JavaScript runs in browsers and on servers (Node.js), enabling full-stack development.",
    icon: <Globe size={24} />
  }
];

// JavaScript Frameworks
export const jsFrameworks: Framework[] = [
  {
    name: "React",
    description: "A JavaScript library for building user interfaces with component-based architecture.",
    users: ["Facebook", "Instagram", "Airbnb", "Netflix"],
    codeExample: 'import React, { useState } from "react";\n\nfunction Counter() {\n  const [count, setCount] = useState(0);\n  \n  return (\n    <div>\n      <p>Count: {count}</p>\n      <button onClick={() => setCount(count + 1)}>Increment</button>\n    </div>\n  );\n}'
  },
  {
    name: "Vue.js",
    description: "Progressive JavaScript framework for building UIs and single-page applications.",
    users: ["Alibaba", "Gitlab", "Adobe", "Xiaomi"],
    codeExample: '<template>\n  <div>\n    <p>Count: {{ count }}</p>\n    <button @click="count++">Increment</button>\n  </div>\n</template>\n\n<script>\nexport default {\n  data() {\n    return {\n      count: 0\n    }\n  }\n}\n</script>'
  },
  {
    name: "Angular",
    description: "Platform and framework for building client applications with TypeScript.",
    users: ["Google", "Microsoft", "Forbes", "BMW"],
    codeExample: 'import { Component } from "@angular/core";\n\n@Component({\n  selector: "app-counter",\n  template: `\n    <p>Count: {{ count }}</p>\n    <button (click)="increment()">Increment</button>\n  `\n})\nexport class CounterComponent {\n  count = 0;\n  \n  increment() {\n    this.count++;\n  }\n}'
  },
  {
    name: "Express.js",
    description: "Fast, unopinionated, minimalist web framework for Node.js.",
    users: ["IBM", "Uber", "Accenture", "Twitter"],
    codeExample: 'const express = require("express");\nconst app = express();\n\napp.get("/", (req, res) => {\n  res.send("Hello World!");\n});\n\napp.listen(3000, () => {\n  console.log("Server running on port 3000");\n});'
  },
  {
    name: "Next.js",
    description: "React framework for production with server-side rendering and static site generation.",
    users: ["TikTok", "Twitch", "Hulu", "Notion"],
    codeExample: '// pages/index.js\nexport default function Home({ data }) {\n  return (\n    <div>\n      <h1>Welcome to Next.js</h1>\n      <p>{data.message}</p>\n    </div>\n  );\n}\n\nexport async function getServerSideProps() {\n  // Fetch data from API\n  return { props: { data: { message: "Hello!" } } };\n}'
  }
];

// JavaScript Basics
export const jsSyntaxExamples = {
  variables: `// Variable declarations
let name = "John"; // Can be reassigned
const age = 30;    // Cannot be reassigned
var legacy = true; // Old way, function scoped

// Data types
let string = "Hello world";
let number = 42;
let boolean = true;
let array = [1, 2, 3];
let object = { key: "value" };
let nullValue = null;
let undefinedValue;
`,

  conditions: `// If statements
let age = 18;

if (age >= 18) {
  console.log("You are an adult");
} else if (age >= 13) {
  console.log("You are a teenager");
} else {
  console.log("You are a child");
}

// Ternary operator
let message = age >= 18 ? "You can vote" : "You cannot vote";

// Switch statement
let day = "Monday";
switch (day) {
  case "Monday":
    console.log("Start of work week");
    break;
  case "Friday":
    console.log("End of work week");
    break;
  default:
    console.log("Another day");
}
`,

  loops: `// For loop
for (let i = 0; i < 5; i++) {
  console.log(\`Iteration \${i}\`);
}

// While loop
let count = 0;
while (count < 5) {
  console.log(\`Count: \${count}\`);
  count++;
}

// For...of loop (arrays)
const fruits = ["Apple", "Banana", "Cherry"];
for (const fruit of fruits) {
  console.log(fruit);
}

// For...in loop (objects)
const person = { name: "Alice", age: 25 };
for (const key in person) {
  console.log(\`\${key}: \${person[key]}\`);
}

// Array methods
fruits.forEach(fruit => console.log(fruit));
`,

  functions: `// Function declaration
function greet(name) {
  return \`Hello, \${name}!\`;
}

// Function expression
const greetExpression = function(name) {
  return \`Hello, \${name}!\`;
};

// Arrow function
const greetArrow = (name) => {
  return \`Hello, \${name}!\`;
};

// Arrow function (shorthand)
const greetShort = name => \`Hello, \${name}!\`;

// Default parameters
function greetWithDefault(name = "Guest") {
  return \`Hello, \${name}!\`;
}

// Rest parameters
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

// Calling functions
console.log(greet("World")); // "Hello, World!"
console.log(sum(1, 2, 3, 4)); // 10
`
};

// HTML Code Examples
export const htmlExamples = {
  basicStructure: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My First HTML Document</title>
</head>
<body>
  <header>
    <h1>Welcome to My Website</h1>
    <nav>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  </header>
  
  <main>
    <section id="home">
      <h2>Home</h2>
      <p>This is the main content of my website.</p>
    </section>
  </main>
  
  <footer>
    <p>&copy; 2023 My Website</p>
  </footer>
</body>
</html>`,

  semanticElements: `<article>
  <h2>Article Title</h2>
  <p>Article content goes here...</p>
  
  <section>
    <h3>Section Heading</h3>
    <p>This is a section within the article.</p>
  </section>
</article>

<aside>
  <h3>Related Information</h3>
  <p>Sidebar content that relates to the main content.</p>
</aside>

<figure>
  <img src="image.jpg" alt="Description of image">
  <figcaption>Caption for the image</figcaption>
</figure>`,

  forms: `<form action="/submit" method="post">
  <fieldset>
    <legend>Personal Information</legend>
    
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" required>
    
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>
    
    <label for="password">Password:</label>
    <input type="password" id="password" name="password" required>
  </fieldset>
  
  <fieldset>
    <legend>Preferences</legend>
    
    <label>
      <input type="checkbox" name="subscribe" value="yes">
      Subscribe to newsletter
    </label>
    
    <p>Favorite color:</p>
    <label>
      <input type="radio" name="color" value="red"> Red
    </label>
    <label>
      <input type="radio" name="color" value="blue"> Blue
    </label>
    <label>
      <input type="radio" name="color" value="green"> Green
    </label>
  </fieldset>
  
  <button type="submit">Submit</button>
  <button type="reset">Reset</button>
</form>`
};

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
