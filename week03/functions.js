// Define the speed for each car brand
let toyota = 20;
let honda = 65;
let tesla = 30;

// Function to determine which car is the fastest
function getFastestCar() {
    // Check if Toyota is faster than both Honda and Tesla
    if (toyota > honda && toyota > tesla) {
        return "Toyota is the fastest car";
    // Check if Honda is faster than both Toyota and Tesla
    } else if (honda > toyota && honda > tesla) {
        return "Honda is the fastest car";
    // Check if Tesla is faster than both Toyota and Honda
    } else if (tesla > toyota && tesla > honda) {
        return "Tesla is the fastest car";
    // If none is fastest, they must be equal
    } else {
        return "All cars have the same speed";
    }
}

// Display the result in the element with id 'hero-txt' in bold
document.querySelector('#hero-txt').innerHTML = `<b>` + getFastestCar() + `</b>`;

// Log the result to the console for debugging
console.log(getFastestCar());