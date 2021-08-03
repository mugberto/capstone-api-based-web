import header from "./header/header";
import './css/app.css';
import footer from "./footer/footer";

const app = () => {
    return header() + footer();
}

export default app;