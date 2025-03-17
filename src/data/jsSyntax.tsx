
// JavaScript Syntax Examples
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
