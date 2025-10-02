// Array of names to choose from
const names = [
  "Chris",
  "Li Kang",
  "Anne",
  "Francesca",
  "Mustafa",
  "Tina",
  "Bert",
  "Jada",
];

// Select the first <p> element in the document to display the chosen name
const para = document.querySelector("p");

// Don't edit the code above here!

// Function to choose a random name from the array and display it
function chooseName() {
  // Generate a random index based on the length of the names array
  const randomNumber = Math.floor(Math.random() * names.length);
  // Get the name at the random index
  const choice = names[randomNumber];
  // Set the text content of the <p> element to the chosen name
  para.textContent = choice;
}

// Call the function to display a random name when the script runs
chooseName();