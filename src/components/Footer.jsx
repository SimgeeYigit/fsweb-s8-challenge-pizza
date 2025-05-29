import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"
import icon1 from "../../images/iteration-2-images/footer/icons/icon-1.png"
import icon2 from "../../images/iteration-2-images/footer/icons/icon-2.png"
import icon3 from "../../images/iteration-2-images/footer/icons/icon-3.png"
import li0 from "../../images/iteration-2-images/footer/insta/li-0.png"
import li1 from "../../images/iteration-2-images/footer/insta/li-1.png"
import li2 from "../../images/iteration-2-images/footer/insta/li-2.png"
import li3 from "../../images/iteration-2-images/footer/insta/li-3.png"
import li4 from "../../images/iteration-2-images/footer/insta/li-4.png"
import li5 from "../../images/iteration-2-images/footer/insta/li-5.png"

export default function Footer() {
    return (
        // < !--Footer -- >
        <div className="footer">
            <div className="footer1">
                <div className="contact">
                    <img src="../../images/iteration-2-images/footer/logo-footer.svg" />
                    <ul style={{ listStyle: "none" }}>
                        <li><img src={icon1} /> 341 Londonderry Road,<br />Istanbul Türkiye</li>
                        <li><img src={icon2} /> aciktim@teknolojikyemekler.com</li>
                        <li><img src={icon3} /> +90 216 123 45 67</li>
                    </ul>
                </div>
                <div className="footer-menu">
                    <h6 className="footer-h6">Hot Menu</h6>
                    <p>Terminal Pizza</p>
                    <p>5 Kişilik Hackathlon Pizza</p>
                    <p>useEffect Tavuklu Pizza</p>
                    <p>Beyaz Console Frosty</p>
                    <p>Testler Geçti Mutlu Burger</p>
                    <p>Position Absolute Acı Burger</p>
                </div>
                <div className="footer-img">
                    <h6 className="footer-h6">Instagram</h6>
                    <div>
                        <img src={li0} />
                        <img src={li1} />
                        <img src={li2} />
                    </div>
                    <div>
                        <img src={li3} />
                        <img src={li4} />
                        <img src={li5} />
                    </div>
                </div>
            </div>
            <div className="copyright">
                <p>© 2023 Teknolojik Yemekler. </p>
                <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
            </div>
        </div>
    )
}