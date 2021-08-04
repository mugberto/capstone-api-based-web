import './css/movieList.css';

const getLikes = (id, likesArr) => {
  const likesItem = likesArr.find((item) => { return item.item_id === id }) || null;
  return likesItem === null ? 0 : likesItem.likes; 
}

const makeList = async (genre='top_rated') => {
  let response;
  if (genre === 'top_rated') {
    response = await fetch('https://api.themoviedb.org/3/movie/top_rated/?api_key=351e94f667108cdc271b0892fb6a48a4');
  } else {
    response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=351e94f667108cdc271b0892fb6a48a4&with_genres=${genre}`);
  }
  const json = await response.json();
  const movies = json.results;

  const likesResponse = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/kqb4B7zblSLILXPp3BYH/likes');
  const likesArr = await likesResponse.json();
  let list = document.querySelector('.movie-list');
  list.innerHTML = '';
  movies.forEach((movie) => {
    list.innerHTML += `
      <div class="movie-card">
        <img class="poster" src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="poster">
        <div class="card-description">
          <div class="title-row">
            <h3>${movie.title}</h3>
            <div>${getLikes(movie.id, likesArr)} likes</div>
          </div>
          <button data-key="${movie.id}" class="comment-btn">Comment</button>
        </div>
      </div>
    `
  });
}

const movieList = () => {
  return `<section class="movie-list"></section>`;
}

export { movieList, makeList };