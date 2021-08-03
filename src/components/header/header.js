import logo from '../../images/logo.png'
import './css/header.css'

const header = () => {    
    return `
        <header>
            <nav>
                <a class="logo" href="index.html">
                    <img src="${logo}" alt="logo">
                </a>
                <ul class="menu-items">
                    <li class="menu-item"><button class="gener-btn" type="button">Top Rated</button></li>
                    <li class="menu-item"><button class="gener-btn" type="button">Action</button></li>
                    <li class="menu-item"><button class="gener-btn active" type="button">Horror</button></li>
                </ul>
            </nav>
        </header>
    `
}

export default header;