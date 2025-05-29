import icons1 from "../../images/iteration-2-images/icons/1.svg"
import icons2 from "../../images/iteration-2-images/icons/2.svg"
import icons3 from "../../images/iteration-2-images/icons/3.svg"
import icons4 from "../../images/iteration-2-images/icons/4.svg"
import icons5 from "../../images/iteration-2-images/icons/5.svg"
import icons6 from "../../images/iteration-2-images/icons/6.svg"
import food1 from "../../images/iteration-2-images/pictures/food-1.png"
import food2 from "../../images/iteration-2-images/pictures/food-2.png"
import food3 from "../../images/iteration-2-images/pictures/food-3.png"


export default function Siparis({handleClick}) {
    return (
        <section>
            <div className="container">
                {/* <!-- Sipariş ver --> */}
                <div className="siparis-items">
                    <div className="siparis-item1">
                        <h3>Özel<br />Lezzetus</h3>
                        <p>Position: Absolute Acı Burger</p>
                        <button type="button" className="siparis-button" onClick={handleClick}>SİPARİŞ VER</button>
                    </div>
                    <div className="siparis-item2">
                        <div className="siparis-item21">
                            <h4>Hackathlon<br />Burger Menü</h4>
                            <button type="button" className="siparis-button" onClick={handleClick}>SİPARİŞ VER</button>
                        </div>
                        <div className="siparis-item22">
                            <h4><span style={{ color: "#D80027" }}>Çoooook</span> hızlı<br />npm gibi kurye</h4>
                            <button type="button" className="siparis-button" onClick={handleClick}>SİPARİŞ VER</button>
                        </div>
                    </div>
                </div>
                {/* <!-- Text --> */}
                <div className="text">
                    <p className="text-items1">en çok paketlenen menüler</p>
                    <p className="text-items2">Acıktıran Kodlara Doyuran Lezzetler</p>
                </div>
                {/* <!-- Navbar --> */}
                <nav>
                    <ul className="menu2">
                        <li className="menu2-items"><a href=""><img src={icons1} />Ramen</a></li>
                        <li className="black"><a href=""><img src={icons2} />Pizza</a></li>
                        <li className="menu2-items"><a href=""><img src={icons3} />Burger</a></li>
                        <li className="menu2-items"><a href=""><img src={icons4} />French fries</a></li>
                        <li className="menu2-items"><a href=""><img src={icons5} />Fast food</a></li>
                        <li className="menu2-items"><a href=""><img src={icons6} />Soft drinks</a></li>
                    </ul>
                </nav>
                {/* <!-- Fiyatlar --> */}
                <div className="food">
                    <div className="food1">
                        <img src={food1} alt="Terminal pizza" />
                        <h5>Terminal Pizza</h5>
                        <div className="price">
                            <p className="gray">4.9</p>
                            <p className="gray">(200)</p>
                            <p className="pricetl">60₺</p>
                        </div>
                    </div>
                    <div className="food1">
                        <img src={food2} alt="Position Absolute Acı Pizza" />
                        <h5>Position Absolute Acı Pizza</h5>
                        <div className="price">
                            <p className="gray">4.9</p>
                            <p className="gray">(200)</p>
                            <p className="pricetl">60₺</p>
                        </div>
                    </div>
                    <div className="food1">
                        <img src={food3} alt="useEffect Tavuklu Burger" />
                        <h5>Position Absolute Acı Pizza</h5>
                        <div className="price">
                            <p className="gray">4.9</p>
                            <p className="gray">(200)</p>
                            <p className="pricetl">60₺</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}