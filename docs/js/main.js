const rating = document.querySelector('.rating');
const submitBtn = document.querySelector('#submit');
const ratingCard = document.querySelector('.rating-card');
const thankYouCard = document.querySelector('.thank-you-card');
const userRating = document.querySelector('.user-rating');

rating.addEventListener("click", (e) => {
    const selectedRating = document.querySelector("#selected-rating");

    if (selectedRating) {
        selectedRating.removeAttribute('id');
    }
    e.target.setAttribute('id', 'selected-rating');

    const userSelected = e.target.getAttribute("data-rating");
    userRating.textContent = `You selected ${userSelected} out of 5`;
});

submitBtn.addEventListener("click", () => {
    ratingCard.style.display = "none";
    thankYouCard.style.display = "block";
});
