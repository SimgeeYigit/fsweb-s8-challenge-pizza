import Footer from "./Footer"
import "./Success.css"
import Logo from "../../images/iteration-1-images/logo.svg"
import { useLocation } from "react-router-dom";

export default function Success() {
    const location = useLocation();
    const orderData = location.state;

    const sizeLetter =
        orderData.size === "Küçük" ? "S" :
        orderData.size === "Orta" ? "M" :
        orderData.size === "Büyük" ? "L" :
        orderData.size;


    return (
        <>
            <div className="success">
                <img className="logo" src={Logo} alt="Teknolojik Yemekler Logo" />
                <div className="success-content">
                    <p className="success-content1">lezzetin yolda</p>
                    <p className="success-content2">SİPARİŞ ALINDI</p>
                </div>
                <div className="order-summary1">
                    <div className="orders">
                        <p className="pizza-title1">Position Absolute Acı Pizza</p>
                        <div className="orders1">
                            <p className="pizza-size">Boyut: <strong>{sizeLetter}</strong></p>
                            <p className="pizza-dough">Hamur: <strong>{orderData.dough}</strong></p>
                            <p className="additional-ingredients">Ek Malzemeler: <strong>{orderData.extras.join(", ")}</strong></p>
                        </div>
                    </div>
                    <div className="total-container">
                        <p className="total-text">Sipariş Toplamı</p>
                        <p className="choices">Seçimler<span>{orderData.extras.length * 5}₺</span></p>
                        <p className="total">Toplam<span>{orderData.total}₺</span></p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}