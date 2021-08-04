import app from './components/app'
import { makeNavBtn } from './components/header/header';
import { makeList } from './components/movieList/movieList';

document.addEventListener('DOMContentLoaded', () => {
  makeList();
  makeNavBtn();
});

document.getElementById('root').innerHTML = app();
