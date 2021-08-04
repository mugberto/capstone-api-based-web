import app from './components/app'
import { makeList } from './components/movieList/movieList';

document.addEventListener('DOMContentLoaded', () => {
  makeList();
});

document.getElementById('root').innerHTML = app();
