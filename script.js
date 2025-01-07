const reviews = [];

function registerUser() {
  const username = document.getElementById('register-username').value;
  const password = document.getElementById('register-password').value;
  alert(`User registered: ${username}`);

  // Redirect to login page after registration
  window.location.href = 'login.html';
}

function loginUser() {
  const username = document.getElementById('login-username').value;
  const password = document.getElementById('login-password').value;
  alert(`User logged in: ${username}`);
}

function postReview() {
  const movieName = document.getElementById('movie-name').value;
  const movieReview = document.getElementById('movie-review').value;
  const movieRating = document.getElementById('movie-rating').value;

  const review = {
    movie: movieName,
    review: movieReview,
    rating: movieRating,
  };

  reviews.push(review);
  displayReviews();
}

function displayReviews() {
  const reviewsContainer = document.getElementById('reviews');
  reviewsContainer.innerHTML = '';

  reviews.forEach((review, index) => {
    const reviewElement = document.createElement('div');
    reviewElement.classList.add('review');

    reviewElement.innerHTML = `
      <h3>${review.movie}</h3>
      <p>${review.review}</p>
      <p>Rating: ${review.rating}</p>
    `;

    reviewsContainer.appendChild(reviewElement);
  });
}
