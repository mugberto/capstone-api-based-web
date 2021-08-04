import header from "./header/header";
import './css/app.css';
import footer from "./footer/footer";
import { movieList } from "./movieList/movieList";
import { moviePopupTemplate } from './moviePopup/moviePopup';

const app = () => {
    return header() + movieList() + footer() + moviePopupTemplate();
}

export default app;