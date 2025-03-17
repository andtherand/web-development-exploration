
import React from 'react';
import { Layout, FileCode, Globe, Code, Monitor } from 'lucide-react';
import { Feature } from '@/components/FeatureGrid';

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
