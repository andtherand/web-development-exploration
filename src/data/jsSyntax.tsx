
// JavaScript Syntax Examples
export const jsSyntaxExamples = {
  variables: `// Variablendeklarationen
let name = "John"; // Kann neu zugewiesen werden
const alter = 30;   // Kann nicht neu zugewiesen werden
var legacy = true; // Alte Methode, funktionsbereich

// Datentypen
let zeichenkette = "Hallo Welt";
let zahl = 42;
let boolean = true;
let array = [1, 2, 3];
let objekt = { schlüssel: "Wert" };
let nullWert = null;
let undefinedWert;
`,

  conditions: `// If-Anweisungen
let alter = 18;

if (alter >= 18) {
  console.log("Du bist erwachsen");
} else if (alter >= 13) {
  console.log("Du bist ein Teenager");
} else {
  console.log("Du bist ein Kind");
}

// Ternärer Operator
let nachricht = alter >= 18 ? "Du darfst wählen" : "Du darfst nicht wählen";

// Switch-Anweisung
let tag = "Montag";
switch (tag) {
  case "Montag":
    console.log("Beginn der Arbeitswoche");
    break;
  case "Freitag":
    console.log("Ende der Arbeitswoche");
    break;
  default:
    console.log("Ein anderer Tag");
}
`,

  loops: `// For-Schleife
for (let i = 0; i < 5; i++) {
  console.log(\`Durchlauf \${i}\`);
}

// While-Schleife
let zähler = 0;
while (zähler < 5) {
  console.log(\`Zähler: \${zähler}\`);
  zähler++;
}

// For...of-Schleife (Arrays)
const früchte = ["Apfel", "Banane", "Kirsche"];
for (const frucht of früchte) {
  console.log(frucht);
}

// For...in-Schleife (Objekte)
const person = { name: "Alice", alter: 25 };
for (const schlüssel in person) {
  console.log(\`\${schlüssel}: \${person[schlüssel]}\`);
}

// Array-Methoden
früchte.forEach(frucht => console.log(frucht));
`,

  functions: `// Funktionsdeklaration
function begrüßen(name) {
  return \`Hallo, \${name}!\`;
}

// Funktionsausdruck
const begrüßungAusdruck = function(name) {
  return \`Hallo, \${name}!\`;
};

// Pfeilfunktion
const begrüßungPfeil = (name) => {
  return \`Hallo, \${name}!\`;
};

// Pfeilfunktion (Kurzform)
const begrüßungKurz = name => \`Hallo, \${name}!\`;

// Standardparameter
function begrüßungMitStandard(name = "Gast") {
  return \`Hallo, \${name}!\`;
}

// Rest-Parameter
function summe(...zahlen) {
  return zahlen.reduce((gesamt, zahl) => gesamt + zahl, 0);
}

// Funktionen aufrufen
console.log(begrüßen("Welt")); // "Hallo, Welt!"
console.log(summe(1, 2, 3, 4)); // 10
`
};
