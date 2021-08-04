import './css/movieList.css';

const makeList = async () => {
  const response = await fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=351e94f667108cdc271b0892fb6a48a4');
  const json = await response.json();
  const movies = json.results;
  let list = document.querySelector('.movie-list');
  movies.forEach((movie) => {
    list.innerHTML += `
      <div class="movie-card">
        <img class="poster" src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="poster">
        <div class="card-description">
          <div class="title-row">
            <h3>${movie.title}</h3>
            <div>5 likes</div>
          </div>
          <button class="comment-btn">Comment</button>
        </div>
      </div>
    `
  });
}

const movieList = () => {
  return `<section class="movie-list"></section>`;
}

export { movieList, makeList };