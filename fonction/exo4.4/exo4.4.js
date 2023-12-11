// Array of names
let arr = ["Mathias", "Nicolas", "Ugur", "Thomas", "Tess", "Noé", "Alexis"];

// User input for the number of learners to select
let n = parseInt(prompt("Saisir un nombre entre 1 et " + arr.length));

// Random number generation function
function alea() {
    return Math.floor(Math.random() * arr.length);
}

// Function to pick 'n' learners randomly from the array 'arr'
function pickLearner(arr, n) {
    let newTab = []; // Initialize an empty array to store selected learners
    for (let i = 0; i < n; i++) { // Loop 'n' times
        newTab.push(arr[alea()]); // Add a randomly selected name from 'arr' to 'newTab'
    }
    return newTab; // Return the array containing the selected names
}

// Display the randomly chosen names
console.log(pickLearner(arr, n));





