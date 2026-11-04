async function fetchMovies() {
  try {
    const response = await fetch("movies.json");
    const movies = await response.json();
    const container = document.getElementById("movieContainer");
    const movieList = movies.filter((movie) => {
      return movie.genre === "드라마";
    });
    movieList.forEach((movie) => {
      const card = document.createElement("div");
      card.className = "card";

      card.innerHTML = `
      <img src="${movie.poster}" alt="${movie.title}">
      <div class="card-body">
        <h2 class="card-title">${movie.title}</h2>
        <p class="card-rating">⭐${movie.rating}</p>
        <p class="card-description">${movie.description}</p>
      </div>
      `;

      container.appendChild(card);
    });

  } catch (error) {
    console.log("에러 발생:", error);
  }
}

fetchMovies();