// main.js

// Base story template with placeholders for random values
const storyText =
    "It was 94 degrees Fahrenheit outside, so :insertx: went for a walk to the :inserty:. When they got there, they saw :insertz:. Everyone was so shocked that it became the story of the year! Bob couldn't stop laughing.";

// Arrays containing random elements for each placeholder
const insertX = ["Willy the Goblin", "Big Bob", "Silly Sally", "Captain Thunder"];
const insertY = ["zoo", "beach", "haunted house", "castle"];
const insertZ = ["a giant talking duck", "a dancing robot", "a mystical unicorn", "a spinning top"];

// Add an event listener to the generate button
document.getElementById("generate").addEventListener("click", result);

// Function to select a random value from an array
function randomValueFromArray(array) {
    // Returns a random index and retrieves the element at that index
    return array[Math.floor(Math.random() * array.length)];
}

// Function to generate and display the story
function result() {
    // Copy the base story text to a new variable
    let newStory = storyText;

    // Randomly select values for placeholders from the arrays
    const xItem = randomValueFromArray(insertX); // Random character
    const yItem = randomValueFromArray(insertY); // Random location
    const zItem = randomValueFromArray(insertZ); // Random event

    // Replace placeholders in the story with the selected values
    newStory = newStory
        .replaceAll(":insertx:", xItem)
        .replaceAll(":inserty:", yItem)
        .replaceAll(":insertz:", zItem);

    // Replace "Bob" with a custom name if provided by the user
    const customName = document.getElementById("customName").value;
    if (customName.trim() !== "") {
        newStory = newStory.replaceAll("Bob", customName.trim());
    }

    // Check if the "UK" option is selected
    const isUK = document.querySelector('input[name="temperature"]:checked').value === "uk";
    if (isUK) {
        // Convert 300 pounds to stones (1 stone = 14 lbs)
        newStory = newStory.replace("300 pounds", `${Math.round(300 / 14)} stone`);

        // Convert 94°F to Celsius using the formula
        const celsius = Math.round((94 - 32) * 5 / 9);
        newStory = newStory.replace("94 degrees Fahrenheit", `${celsius} degrees Celsius`);
    }

    // Display the final story in the paragraph element
    const storyElement = document.getElementById("story");
    storyElement.textContent = newStory;
    storyElement.style.display = "block"; // Make the story visible
}
