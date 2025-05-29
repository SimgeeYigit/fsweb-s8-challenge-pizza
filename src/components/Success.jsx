import Footer from "./Footer"
import "./Success.css"
import Logo from "../../images/iteration-1-images/logo.svg"
export default function Success({ pizzaTitle, pizzaSize, pizzaDough, additionalIngredients }) {
    return (
        <>
            <div className="success">
                <img className="logo" src={Logo} alt="Teknolojik Yemekler Logo" />
                <div className="success-content">
                    <p className="success-content1">lezzetin yolda</p>
                    <p className="success-content2">SİPARİŞ ALINDI</p>
                </div>
                <div className="order-summary">
                    <div className="orders">
                        <p className="pizza-title">Position Absolute Acı Pizza</p>
                        <div className="orders1">
                            <p className="pizza-size">Boyut: <strong>L</strong></p>
                            <p className="pizza-dough">Hamur: <strong>Süpper İnce</strong></p>
                            <p className="additional-ingredients">Ek Malzemeler: <strong>Pepperoni, Sosis, Mısır, Ananas, Jalepeno</strong></p>
                        </div>
                    </div>
                    <div className="total-container">
                        <p className="total-text">Sipariş Toplamı</p>
                        <p className="choices">Seçimler</p>
                        <p className="total">Toplam</p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}