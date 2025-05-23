// Array to store the emojis
const myEmojis = ["👨‍💻", "⛷", "🍲", "🎨", "📚", "🎵", "🌍", "🏕", "🚴", "🐾"];

// Function to render emojis in the emoji container
function selectEmo(){
    const emojieContainer = document.getElementById('emoji-container'); // Get the emoji container element
    emojieContainer.innerHTML = " "; // Clear the container
    for(let i = 0; i < myEmojis.length; i++){ // Loop through the emojis array
        const emojie = document.createElement('span'); // Create a new span element for each emoji
        emojie.textContent = myEmojis[i]; // Set the emoji as the text content
        emojieContainer.append(emojie); // Append the emoji to the container
    }
}
selectEmo(); // Initial rendering of emojis

// Add event listener for the "Push" button
const pushe = document.getElementById('push-btn');
pushe.addEventListener("click", () =>{
    const emoinput = document.getElementById('emoji-input'); // Get the emoji input field
    if(emoinput.value) { // Check if the input field is not empty
        myEmojis.push(emoinput.value); // Add the new emoji to the end of the array
        emoinput.value = " "; // Clear the input field
        selectEmo(); // Re-render the emojis
    }
});

// Add event listener for the "Unshift" button
const unshiftt = document.getElementById('unshift-btn');
unshiftt.addEventListener("click", () =>{
    const emoinput = document.getElementById('emoji-input'); // Get the emoji input field
    if(emoinput.value) { // Check if the input field is not empty
        myEmojis.unshift(emoinput.value); // Add the new emoji to the beginning of the array
        emoinput.value = " "; // Clear the input field
        selectEmo(); // Re-render the emojis
    }
});

// Add event listener for the "reverse" button
const reversebtn = document.getElementById('reverse-btn');
reversebtn.addEventListener('click', () =>{
    const emoinput = document.getElementById('emoji-input'); // Get the emoji input field (not used here)
    myEmojis.reverse(); // Reverse the order of emojis in the array
    selectEmo(); // Re-render the emojis
});

// Add event listener for the "Pop" button
const popbtn = document.getElementById('pop-btn');
popbtn.addEventListener('click', () =>{
    const emoinput = document.getElementById('emoji-input'); // Get the emoji input field (not used here)
    myEmojis.pop(); // Remove the last emoji from the array
    selectEmo(); // Re-render the emojis
});

// Add event listener for the "Shift" button
const shiftbrn = document.getElementById('shift-btn');
shiftbrn.addEventListener('click', () =>{
    const emoinput = document.getElementById('emoji-input'); // Get the emoji input field (not used here)
    myEmojis.shift(); // Remove the first emoji from the array
    selectEmo(); // Re-render the emojis
});



// Add event listener for the "Sort accending order" button
const sortbtn = document.getElementById('sort-btn');
sortbtn.addEventListener('click', () =>{
    const emoinput = document.getElementById('emoji-input'); // Get the emoji input field (not used here)
    myEmojis.sort((a,b)=>a-b); // Sort the emojis in numerical order
    selectEmo(); // Re-render the emojis
});

// Add event listener for the "Sort decending order" button
const sortbtn2 = document.getElementById('sort1-btn');
sortbtn2.addEventListener('click', () =>{
    const emoinput = document.getElementById('emoji-input'); // Get the emoji input field (not used here)
    myEmojis.sort((a,b)=>b-a); // Sort the emojis in reverse numerical order
    selectEmo(); // Re-render the emojis
});






// Add event listener for the "clear" button
const clearbtn = document.getElementById('clear-btn');
clearbtn.addEventListener('click', () =>{
    const emoinput = document.getElementById('emoji-input'); // Get the emoji input field (not used here)
    myEmojis.length = 0; // Clear the entire array
    selectEmo(); // Re-render the emojis
});