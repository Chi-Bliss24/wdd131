// Get references to the input, button, and list elements from the DOM
const input = document.querySelector('#favchap'); // Input field for favorite chapter
const button = document.querySelector('button');  // Button to add chapter
const list = document.querySelector('#list');     // Unordered list to display chapters



// Add event listener to the button to handle adding chapters
button.addEventListener('click', function(){
    // Only add if input is not empty
    if (input.value.trim() !== '') {
        // Create a new list item (li) and a delete button for each new chapter
        const li = document.createElement('li');          // New list item for the chapter
        const deleteButton = document.createElement('button'); // Button to delete the chapter

        // Set the text of the list item to the value entered in the input
        li.textContent = input.value;

        // Set the text of the delete button to a cross symbol
        deleteButton.textContent = '❌';

        // Add event listener to delete the item when button is clicked
        deleteButton.addEventListener('click', () => {
            list.removeChild(li);
        });

        // Add the delete button to the list item
        li.appendChild(deleteButton);

        // Add the new list item (with delete button) to the list in the DOM
        list.append(li);

        // Clear the input field for the next entry
        input.value = '';
        input.focus();
    }
});