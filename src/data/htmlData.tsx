
import React from 'react';
import { Layout, FileCode, Globe, Code, Monitor } from 'lucide-react';
import { Feature } from '@/components/FeatureGrid';

// HTML Features
export const htmlFeatures: Feature[] = [
  {
    title: "Struktur",
    description: "HTML definiert die grundlegende Struktur und Organisation von Webinhalten durch Elemente und Tags.",
    icon: <Layout size={24} />
  },
  {
    title: "Semantik",
    description: "Semantische HTML-Elemente verleihen Inhalten Bedeutung und verbessern Zugänglichkeit und SEO.",
    icon: <FileCode size={24} />
  },
  {
    title: "Links",
    description: "Hyperlinks verbinden Seiten und Ressourcen und bilden die Grundlage der Webnavigation.",
    icon: <Globe size={24} />
  },
  {
    title: "Formulare",
    description: "HTML-Formulare ermöglichen Benutzereingaben und Datenerfassung für interaktive Webanwendungen.",
    icon: <Code size={24} />
  },
  {
    title: "Medien",
    description: "Unterstützung für Bilder, Video, Audio und andere Multimedia-Inhalte bereichert Webinhalte.",
    icon: <Monitor size={24} />
  }
];

// HTML Code Examples
export const htmlExamples = {
  basicStructure: `<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Mein erstes HTML-Dokument</title>
</head>
<body>
  <header>
    <h1>Willkommen auf meiner Webseite</h1>
    <nav>
      <ul>
        <li><a href="#home">Startseite</a></li>
        <li><a href="#about">Über uns</a></li>
        <li><a href="#contact">Kontakt</a></li>
      </ul>
    </nav>
  </header>
  
  <main>
    <section id="home">
      <h2>Startseite</h2>
      <p>Dies ist der Hauptinhalt meiner Webseite.</p>
    </section>
  </main>
  
  <footer>
    <p>&copy; 2023 Meine Webseite</p>
  </footer>
</body>
</html>`,

  semanticElements: `<article>
  <h2>Artikel-Titel</h2>
  <p>Artikelinhalt hier...</p>
  
  <section>
    <h3>Abschnittsüberschrift</h3>
    <p>Dies ist ein Abschnitt innerhalb des Artikels.</p>
  </section>
</article>

<aside>
  <h3>Verwandte Informationen</h3>
  <p>Seitenleisteninhalt, der sich auf den Hauptinhalt bezieht.</p>
</aside>

<figure>
  <img src="bild.jpg" alt="Beschreibung des Bildes">
  <figcaption>Beschriftung für das Bild</figcaption>
</figure>`,

  forms: `<form action="/absenden" method="post">
  <fieldset>
    <legend>Persönliche Informationen</legend>
    
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" required>
    
    <label for="email">E-Mail:</label>
    <input type="email" id="email" name="email" required>
    
    <label for="password">Passwort:</label>
    <input type="password" id="password" name="password" required>
  </fieldset>
  
  <fieldset>
    <legend>Präferenzen</legend>
    
    <label>
      <input type="checkbox" name="subscribe" value="yes">
      Newsletter abonnieren
    </label>
    
    <p>Lieblingsfarbe:</p>
    <label>
      <input type="radio" name="color" value="red"> Rot
    </label>
    <label>
      <input type="radio" name="color" value="blue"> Blau
    </label>
    <label>
      <input type="radio" name="color" value="green"> Grün
    </label>
  </fieldset>
  
  <button type="submit">Absenden</button>
  <button type="reset">Zurücksetzen</button>
</form>`
};
