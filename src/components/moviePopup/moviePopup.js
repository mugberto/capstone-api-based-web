/* eslint-disable no-unresolved extensions*/
import './css/moviePopup.css';

const commentCounter = require('../../counters/commentCounter.js');

const getComments = async (id) => {
  let response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/dAaUSAPTSkpT2Q5FkoUF/comments?item_id=${id}`);
  response = await response.json();
  const commentWrap = document.querySelector('.comments-wrap');
  commentWrap.innerHTML = '';
  if (response.length > 0) {
    response.forEach((comment) => {
      commentWrap.innerHTML += `<li class="comment">
                                        <div class="comment-details">
                                            <p class="date">${comment.creation_date}</p>
                                            <p class="name">${comment.username}</p>
                                        </div>
                                        <p class="comment-text">${comment.comment}</p>
                                    </li>`;
    });
    const counterWrap = document.querySelector('.comments-counter');
    counterWrap.innerHTML = `(${commentCounter(response)})`;
  }
};

const addComment = (e, id, name, comment) => {
  if (name === '' || comment === '') {
    e.preventDefault();
  } else {
    fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/dAaUSAPTSkpT2Q5FkoUF/comments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ item_id: id, username: name, comment }),
    });
    setTimeout(() => {
      getComments(id);
    }, 1000);
  }
};

export const showMoviePopup = async (commentBtn) => {
  await fetch(`https://api.themoviedb.org/3/movie/${commentBtn.dataset.key}?api_key=8c5cae2e7a2a28ebed0be230de325abe&language=en-US`)
    .then((resp) => resp.json())
    .then((data) => {
      let genre = data.genres.map((genre) => genre.name);
      genre = genre.join(', ');
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
                                    <h2>Comments<span class="comments-counter">(0)</span></h2>
                                    <ul class="comments-wrap"></ul>
                                </div>
                                <form class="add-comment-form"> 
                                    <h2>Add Comment</h2>
                                    <input type="text" name="name" placeholder="Your name" required />
                                    <textarea name="comment" placeholder="Your insights" required></textarea>
                                    <button class="add-comment-btn" type="button">Comment</button>
                                </form>
                            </div>
        `;
      const closePopup = document.querySelector('.popupContentWrap .exit-btn i');
      const nameInput = document.querySelector('.add-comment-form input[type="text"]');
      const commentInput = document.querySelector('.add-comment-form textarea');
      const addCommentBtn = document.querySelector('.add-comment-form .add-comment-btn');
      addCommentBtn.addEventListener('click', (e) => {
        addComment(e, data.id, nameInput.value, commentInput.value);
        nameInput.value = '';
        commentInput.value = '';
      });
      closePopup.addEventListener('click', () => {
        popupWrap.style.display = 'none';
      });
      getComments(data.id);
    });
};

export const moviePopupTemplate = () => `
        <div class="popupWrap"></div>
    `;
