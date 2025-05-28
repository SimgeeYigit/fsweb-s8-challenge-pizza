import icons1 from "../../../images/iteration-2-images/icons/1.svg"
import icons2 from "../../../images/iteration-2-images/icons/2.svg"
import icons3 from "../../../images/iteration-2-images/icons/3.svg"
import icons4 from "../../../images/iteration-2-images/icons/4.svg"
import icons5 from "../../../images/iteration-2-images/icons/5.svg"
import icons6 from "../../../images/iteration-2-images/icons/6.svg"
import "./Navbar.css"

export default function Navbar() {
    return (
        <nav>
            <ul className="menu">
                <li className="menu-items"><a href=""><img src={icons1} />YENİ! Kore</a></li>
                <li className="menu-items"><a href=""><img src={icons2} />Pizza</a></li>
                <li className="menu-items"><a href=""><img src={icons3} />Burger</a></li>
                <li className="menu-items"><a href=""><img src={icons4} />Kızartmalar</a></li>
                <li className="menu-items"><a href=""><img src={icons5} />Fast food</a></li>
                <li className="menu-items"><a href=""><img src={icons6} />Gazlı İçecek</a></li>
            </ul>
        </nav>
    )
}