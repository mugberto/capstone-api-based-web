import header from './header/header';
import './css/app.css';
import footer from './footer/footer';
import { movieList } from './movieList/movieList';

const app = () => header() + movieList() + footer();

export default app;