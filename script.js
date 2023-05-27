const plates = [
  "IshiharaTestPlates1.png",
  "IshiharaTestPlates2.png",
  "IshiharaTestPlates3.png",
  "IshiharaTestPlates4.png",
  "IshiharaTestPlates5.png",
  "IshiharaTestPlates6.png",
  "IshiharaTestPlates7.png",
  "IshiharaTestPlates8.png",
  "IshiharaTestPlates9.png",
  "IshiharaTestPlates10.png",
  "IshiharaTestPlates11.png",
  "IshiharaTestPlates12.png",
  "IshiharaTestPlates13.png",
  "IshiharaTestPlates14.png",
  "IshiharaTestPlates15.png",
  "IshiharaTestPlates16.png",
  "IshiharaTestPlates17.png",
  "IshiharaTestPlates18.png",
  "IshiharaTestPlates19.png",
  "IshiharaTestPlates20.png",
  "IshiharaTestPlates21.png",
  "IshiharaTestPlates22.png",
  "IshiharaTestPlates23.png",
  "IshiharaTestPlates24.png",
];

const correctAnswers = [
  "12",
  "8",
  "29",
  "5",
  "3",
  "15",
  "74",
  "6",
  "45",
  "5",
  "7",
  "16",
  "73",
  "0",
  "0",
  "26",
  "42",
  "2",
  "0",
  "1",
  "1",
  "1",
  "1",
  "1",
];

let currentPlateIndex = 0;

const ishiharaImage = document.getElementById("ishihara-image");
const answerInput = document.getElementById("answer");
const hintContainer = document.getElementById("hint");
const nextButton = document.getElementById("next-button");

// Function to display the current plate
function displayPlate() {
  ishiharaImage.src = plates[currentPlateIndex];
  answerInput.value = "";
  hintContainer.textContent = "";
  nextButton.disabled = true;
}

// Function to check the answer
function checkAnswer() {
  const answer = answerInput.value.trim();
  const correctAnswer = correctAnswers[currentPlateIndex].toLowerCase();

  // Check if the answer is correct
  if (answer.toLowerCase() === correctAnswer) {
    // Display a success message
    hintContainer.textContent = "LEKKER MAN IZIhara";

    // Enable the next button
    nextButton.disabled = false;
  } else {
    // Display a hint
    hintContainer.textContent =
      "Probeer weer of ek klap jou!Maak hom die knoppie groen";
  }
}

// Function to move to the next plate
function goToNextPlate() {
  // Increment the current plate index
  currentPlateIndex++;

  // Check if we have reached the end of the plates array
  if (currentPlateIndex >= plates.length) {
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
