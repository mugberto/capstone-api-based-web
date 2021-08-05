import './css/moviePopup.css';

export const showMoviePopup = async (commentBtn) => {
  await fetch(`https://api.themoviedb.org/3/movie/${commentBtn.dataset.key}?api_key=8c5cae2e7a2a28ebed0be230de325abe&language=en-US`)
    .then((resp) => resp.json())
    .then((data) => {
      let genre = data.genres.map((genre) => genre.name);
      genre = genre.join(', ');
      console.log(genre);
      const popupWrap = document.querySelector('.popupWrap');
      popupWrap.style.display = 'flex';
      popupWrap.innerHTML = `
                            <div class="popupContentWrap">
                                <div class="exit-btn">
                                    <i class="far fa-times-circle"></i>
                                </div>
                                <div class="popupTop">
                                    <div class="movie-image">
                                        <img src="http://image.tmdb.org/t/p/w500/${data.poster_path}" alt="movie-poster" />
                                    </div>
                                    <div class="movie-details">
                                        <h2>${data.title}</h2>
                                        <p>Genre: <span>${genre}</span></p>
                                        <p>Relase date: <span>${data.release_date}</span></p>
                                        <p>Vote average: <span>${data.vote_average}</span></p>
                                        <p>Description: <span>${data.overview}</span></p>
                                    </div>
                                </div>
                                <div class="comments">
                                    <h2>Comments<span>(2)</span></h2>
                                    <ul class="comments-wrap">
                                        <li class="comment">
                                            <div class="comment-details">
                                                <p class="date">03/08/2021</p>
                                                <p class="name">Alex</p>
                                            </div>
                                            <p class="comment-text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has</p>
                                        </li>
                                        <li class="comment">
                                            <div class="comment-details">
                                                <p class="date">03/08/2021</p>
                                                <p class="name">Alex</p>
                                            </div>
                                            <p class="comment-text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has</p>
                                        </li>
                                    </ul>
                                </div>
                                <form class="add-comment-form"> 
                                    <h2>Add Comment</h2>
                                    <input type="text" name="name" placeholder="Your name" require />
                                    <textarea name="comment" placeholder="Your insights" require></textarea>
                                    <button class="add-comment-btn" type="button">Comment</button>
                                </form>
                            </div>
        `;
      const closePopup = document.querySelector('.popupContentWrap .exit-btn i');
      closePopup.addEventListener('click', () => popupWrap.style.display = 'none');
      console.log(data);
    });
};

export const moviePopupTemplate = () => `
        <div class="popupWrap"></div>
    `;
