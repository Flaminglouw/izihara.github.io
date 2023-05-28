const plates = [
  { plate: "IshiharaTestPlates1.png", answer: "12" },
  { plate: "IshiharaTestPlates2.png", answer: "8" },
  { plate: "IshiharaTestPlates3.png", answer: "29" },
  { plate: "IshiharaTestPlates4.png", answer: "5" },
  { plate: "IshiharaTestPlates5.png", answer: "3" },
  { plate: "IshiharaTestPlates6.png", answer: "15" },
  { plate: "IshiharaTestPlates7.png", answer: "74" },
  { plate: "IshiharaTestPlates8.png", answer: "6" },
  { plate: "IshiharaTestPlates9.png", answer: "45" },
  { plate: "IshiharaTestPlates10.png", answer: "5" },
  { plate: "IshiharaTestPlates11.png", answer: "7" },
  { plate: "IshiharaTestPlates12.png", answer: "16" },
  { plate: "IshiharaTestPlates13.png", answer: "73" },
  { plate: "IshiharaTestPlates14.png", answer: "0" },
  { plate: "IshiharaTestPlates15.png", answer: "0" },
  { plate: "IshiharaTestPlates16.png", answer: "26" },
  { plate: "IshiharaTestPlates17.png", answer: "42" },
  { plate: "IshiharaTestPlates18.png", answer: "2" },
  { plate: "IshiharaTestPlates19.png", answer: "0" },
  { plate: "IshiharaTestPlates20.png", answer: "1" },
  { plate: "IshiharaTestPlates21.png", answer: "1" },
  { plate: "IshiharaTestPlates22.png", answer: "1" },
  { plate: "IshiharaTestPlates23.png", answer: "1" },
  { plate: "IshiharaTestPlates24.png", answer: "1" },
];

// Shuffle the plates array
const shuffledPlates = shuffle(plates);

// Function to shuffle an array using Fisher-Yates algorithm
function shuffle(array) {
  let currentIndex = array.length;
  let temporaryValue, randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

const ishiharaImage = document.getElementById("ishihara-image");
const answerInput = document.getElementById("answer");
const hintContainer = document.getElementById("hint");
const nextButton = document.getElementById("next-button");

let currentPlateIndex = 0;

// Function to display the current plate
function displayPlate() {
  const currentPlate = shuffledPlates[currentPlateIndex];
  ishiharaImage.src = currentPlate.plate;
  answerInput.value = "";
  hintContainer.textContent = "";
  nextButton.disabled = true;
}

// Function to check the answer
function checkAnswer() {
  const answer = answerInput.value.trim().toLowerCase();
  const currentPlate = shuffledPlates[currentPlateIndex];

  // Check if the answer is correct
  if (answer === currentPlate.answer.toLowerCase()) {
    // Display a success message
    hintContainer.textContent = "LEKKER MAN IZIhara";

    // Enable the next button
    nextButton.disabled = false;
  } else {
    // Display a hint
    hintContainer.textContent = "En nou ou seun";
  }
}

// Function to move to the next plate
function goToNextPlate() {
  // Increment the current plate index
  currentPlateIndex++;

  // Check if we have reached the end of the plates array
  if (currentPlateIndex >= shuffledPlates.length) {
    // Reset the index to cycle back to the first plate
    currentPlateIndex = 0;
  }

  // Display the next plate
  displayPlate();
}

// Event listener for the next button
nextButton.addEventListener("click", goToNextPlate);

// Event listener for the submit button
document.getElementById("submit").addEventListener("click", checkAnswer);

// Display the first plate
displayPlate();
