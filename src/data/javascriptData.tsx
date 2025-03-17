
import React from 'react';
import { Laptop, Code, Server, Braces, Globe } from 'lucide-react';
import { Feature } from '@/components/FeatureGrid';
import { Framework } from '@/components/FrameworkShowcase';

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
