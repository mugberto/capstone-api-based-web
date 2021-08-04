import logo from '../../images/logo.png'
import { makeList } from '../movieList/movieList';
import './css/header.css'

const makeNavBtn = () => {
  const allBtn = document.querySelectorAll('.genre-btn');
  allBtn.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      allBtn.forEach((item) => item.classList.remove('active'));
      e.target.classList.add('active')
      switch(e.target.textContent){
        case 'Top Rated':
          makeList();
          break;
        case 'Action':
          makeList(28);
          break;
        case 'Horror':
          makeList(27);
          break;
        default:
          break;
      }
    });
  });
};

const header = () => {    
    return `
        <header>
            <nav>
                <a class="logo" href="index.html">
                    <img src="${logo}" alt="logo">
                </a>
                <ul class="menu-items">
                    <li class="menu-item"><button class="genre-btn active" type="button">Top Rated</button></li>
                    <li class="menu-item"><button class="genre-btn" type="button">Action</button></li>
                    <li class="menu-item"><button class="genre-btn" type="button">Horror</button></li>
                </ul>
            </nav>
        </header>
    `
};

export default header;
export { makeNavBtn };