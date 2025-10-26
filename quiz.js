// Define the function to check the user's answer
function checkAnswer() {
    // Step 1: Identify the correct answer
    const correctAnswer = "4";

    // Step 2: Retrieve the user's selected answer
    const selectedOption = document.querySelector('input[name="quiz"]:checked');
    
    // If no option is selected, provide feedback and exit the function early
    if (!selectedOption) {
        document.getElementById('feedback').textContent = "Please select an answer before submitting!";
        document.getElementById('feedback').style.color = "#dc3545"; // Red text for warning
        return;
    }

    const userAnswer = selectedOption.value;

    // Step 3: Compare the user's answer with the correct answer
    const feedback = document.getElementById('feedback');
    if (userAnswer === correctAnswer) {
        feedback.textContent = "Correct! Well done.";
        feedback.style.color = "#28a745"; // Green for success
    } else {
        feedback.textContent = "That's incorrect. Try again!";
        feedback.style.color = "#dc3545"; // Red for error
    }
}

// Step 4: Add an event listener to the submit button
document.getElementById('submit-answer').addEventListener('click', checkAnswer);
