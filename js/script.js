let submitButton = document.getElementById("submit");
let thankYouModal = document.getElementById("thankYou");
let numberRating = document.querySelector('ul');
let main = document.getElementById("main");
let userFeedback = document.getElementById('userFeedback');

// displays the thank you modal
submitButton.addEventListener('click', () => {
    thankYouModal.style.display = 'grid';
});

// Using event delegation
// Grabs the text of the event triggered
// and displays it on the thank you modal
numberRating.addEventListener("click", (event) => {
    // console.log(event.target)
    if (event.target.tagName === "BUTTON") {
        userFeedback.innerHTML = event.target.innerHTML;
    }
});

// exit the modal when the main body is clicked
main.addEventListener('click', (event) => {
    if (event.target === main) {
        thankYouModal.style.display = 'none';
    }
});