
import React from 'react';
import { Laptop, Code, Server, Braces, Globe } from 'lucide-react';
import { Feature } from '@/components/FeatureGrid';
import { Framework } from '@/components/FrameworkShowcase';

// JavaScript Features
export const jsFeatures: Feature[] = [
  {
    title: "Interaktivität",
    description: "JavaScript ermöglicht dynamisches Verhalten und Benutzerinteraktionen auf Webseiten.",
    icon: <Laptop size={24} />
  },
  {
    title: "DOM-Manipulation",
    description: "JavaScript kann das Document Object Model manipulieren, um Seiteninhalt und -struktur zu ändern.",
    icon: <Code size={24} />
  },
  {
    title: "Asynchrone Verarbeitung",
    description: "Fetch API, Promises und async/await verarbeiten asynchrone Operationen wie API-Aufrufe.",
    icon: <Server size={24} />
  },
  {
    title: "Ereignisbehandlung",
    description: "JavaScript kann auf Benutzeraktionen wie Klicks, Eingabe und Scrollen reagieren.",
    icon: <Braces size={24} />
  },
  {
    title: "Client & Server",
    description: "JavaScript läuft in Browsern und auf Servern (Node.js) und ermöglicht Full-Stack-Entwicklung.",
    icon: <Globe size={24} />
  }
];

// JavaScript Frameworks
export const jsFrameworks: Framework[] = [
  {
    name: "React",
    description: "Eine JavaScript-Bibliothek zum Erstellen von Benutzeroberflächen mit komponentenbasierter Architektur.",
    users: ["Facebook", "Instagram", "Airbnb", "Netflix"],
    codeExample: 'import React, { useState } from "react";\n\nfunction Counter() {\n  const [count, setCount] = useState(0);\n  \n  return (\n    <div>\n      <p>Zähler: {count}</p>\n      <button onClick={() => setCount(count + 1)}>Erhöhen</button>\n    </div>\n  );\n}'
  },
  {
    name: "Vue.js",
    description: "Progressives JavaScript-Framework zum Erstellen von UIs und Single-Page-Anwendungen.",
    users: ["Alibaba", "Gitlab", "Adobe", "Xiaomi"],
    codeExample: '<template>\n  <div>\n    <p>Zähler: {{ count }}</p>\n    <button @click="count++">Erhöhen</button>\n  </div>\n</template>\n\n<script>\nexport default {\n  data() {\n    return {\n      count: 0\n    }\n  }\n}\n</script>'
  },
  {
    name: "Angular",
    description: "Plattform und Framework zum Erstellen von Client-Anwendungen mit TypeScript.",
    users: ["Google", "Microsoft", "Forbes", "BMW"],
    codeExample: 'import { Component } from "@angular/core";\n\n@Component({\n  selector: "app-counter",\n  template: `\n    <p>Zähler: {{ count }}</p>\n    <button (click)="increment()">Erhöhen</button>\n  `\n})\nexport class CounterComponent {\n  count = 0;\n  \n  increment() {\n    this.count++;\n  }\n}'
  },
  {
    name: "Express.js",
    description: "Schnelles, unvoreingenommenes, minimalistisches Web-Framework für Node.js.",
    users: ["IBM", "Uber", "Accenture", "Twitter"],
    codeExample: 'const express = require("express");\nconst app = express();\n\napp.get("/", (req, res) => {\n  res.send("Hallo Welt!");\n});\n\napp.listen(3000, () => {\n  console.log("Server läuft auf Port 3000");\n});'
  },
  {
    name: "Next.js",
    description: "React-Framework für Produktion mit serverseitigem Rendering und statischer Seitengenerierung.",
    users: ["TikTok", "Twitch", "Hulu", "Notion"],
    codeExample: '// pages/index.js\nexport default function Home({ data }) {\n  return (\n    <div>\n      <h1>Willkommen bei Next.js</h1>\n      <p>{data.message}</p>\n    </div>\n  );\n}\n\nexport async function getServerSideProps() {\n  // Daten von API abrufen\n  return { props: { data: { message: "Hallo!" } } };\n}'
  }
];
