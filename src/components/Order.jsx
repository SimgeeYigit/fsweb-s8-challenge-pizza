import React, { useState } from "react";
import "./Order.css";
import { useHistory } from "react-router-dom";
import PopupMessage from "./PopupMessage";
import axios from "axios";
import Logo from "../../images/iteration-1-images/logo.svg"
import HomePage from "./HomePage"
import Success from "./Success"
const Order = () => {
    const history = useHistory();

    const [selectedSize, setSelectedSize] = useState("");
    const [selectedDough, setSelectedDough] = useState("Hamur Kalınlığı");
    const [selectedExtras, setSelectedExtras] = useState([]);
    const [orderNote, setOrderNote] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [popupMessage, setPopupMessage] = useState("");
    const [name, setName] = useState("");
    const [nameError, setNameError] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const basePrice = 85.5;
    const extraPrice = 5;
    const totalPrice = basePrice + selectedExtras.length * extraPrice;

    const [pizzaTitle, setPizzaTitle] = useState();

    const extras = [
        "Pepperoni",
        "Sosis",
        "Kanada Jambonu",
        "Tavuk Izgara",
        "Soğan",
        "Domates",
        "Mısır",
        "Sucuk",
        "Jalapeno",
        "Sarımsak",
        "Biber",
        "Avocado",
        "Ananas",
        "Kabak",
    ];

    const handleNameChange = (event) => {
        const newName = event.target.value;
        setName(newName);
        if (newName.length < 3) {
            setNameError("İsim en az 3 karakterden oluşmalıdır!");
        } else {
            setNameError("");
        }
    };

    const handleExtraChange = (event) => {
        const { value, checked } = event.target;
        setSelectedExtras((prevExtras) =>
            checked
                ? prevExtras.length < 10 ? [...prevExtras, value] : prevExtras
                : prevExtras.filter((item) => item !== value)
        );
    };

    const handleQuantityChange = (amount) => {
        setQuantity((prev) => Math.max(1, prev + amount));
    };

    const handleSizeChange = (event) => {
        setSelectedSize(event.target.value);
    };

    const handleDoughChange = (event) => {
        setSelectedDough(event.target.value);
    };

    const handleOrderNoteChange = (event) => {
        setOrderNote(event.target.value);
    };

    const isFormValid = () => {
        return (
            name.length >= 3 &&
            selectedSize !== "" &&
            selectedDough !== "Hamur Kalınlığı" &&
            selectedExtras.length >= 4 &&
            selectedExtras.length <= 10
        );
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("submit butonuna basıldı");

        if (!isFormValid()) {
            setPopupMessage("Lütfen tüm alanları eksiksiz doldurun.");
            setTimeout(() => {
                setPopupMessage("");
            }, 3000);
            return;
        }

        setIsSubmitting(true);
        console.log("api request gönderiliyor");

        const orderData = {
            name,
            size: selectedSize,
            dough: selectedDough,
            extras: selectedExtras,
            note: orderNote,
            quantity,
            total: (totalPrice * quantity).toFixed(2),
        };

        axios
            .post("https://reqres.in/api/pizza", orderData, {
                headers: {
                    "x-api-key": "reqres-free-v1"
                }
            })
            .then((response) => {
                console.log(response);
                setTimeout(() => {
                    history.push({pathname:"/success", state: orderData});
                    window.scrollTo(0, 0);
                }, 1000);
            })
            .catch((error) => {
                console.error("api hatası", error);
                setPopupMessage("Bir hata oluştu. Lütfen tekrar deneyin.");
            })
            .finally(() => {
                setIsSubmitting(false);
            });
    };

    return (
        <div>
            <div className="order-header">
                <img className="order-logo" src={Logo} />
                <nav>
                    <p className="order-nav">
                        <span onClick={history.goBack}>Anasayfa</span>
                        <span> - </span>
                        <strong>Sipariş Oluştur</strong>
                    </p>
                </nav>
            </div>
            <div className="order-wrapper">
                <PopupMessage message={popupMessage} onClose={() => setPopupMessage("")} />
                <div className="order-container">
                    <h2 className="pizza-title">Position Absolute Acı Pizza</h2>
                    <div className="pizza-info">
                        <span className="pizza-price">85.50₺</span>
                        <span className="pizza-rating">4.9</span>
                        <span className="pizza-people">(200)</span>
                    </div>

                    <p className="pizza-description">
                        Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı
                        pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli
                        diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun
                        ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak,
                        düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli
                        lezzetli bir yemektir. Küçük bir pizzaya bazen pizzetta denir.
                    </p>

                    <div className="pizza-options">
                        <div className="size-selection">
                            <h4 className="select">Boyut Seç</h4>
                            {["Küçük", "Orta", "Büyük"].map((size) => (
                                <label key={size}>
                                    <input
                                        type="radio"
                                        name="size"
                                        value={size}
                                        onChange={handleSizeChange}
                                    />{" "}
                                    {size}
                                </label>
                            ))}
                        </div>
                        <div className="dough-selection">
                            <h4 className="select">Hamur Seç </h4>
                            <select value={selectedDough} onChange={handleDoughChange}>
                                <option disabled>Hamur Kalınlığı</option>
                                <option>İnce</option>
                                <option>Normal</option>
                                <option>Kalın</option>
                            </select>
                        </div>
                    </div>

                    <div className="extra-ingredients">
                        <h4>Ek Malzemeler</h4>
                        <p>En fazla 10 malzeme seçebilirsiniz. 5₺</p>
                        <div className="ingredients-list">
                            {extras.map((extra, index) => (
                                <label key={index}>
                                    <input
                                        type="checkbox"
                                        value={extra}
                                        checked={selectedExtras.includes(extra)}
                                        onChange={handleExtraChange}
                                    />{" "}
                                    {extra}
                                </label>
                            ))}
                        </div>
                    </div>

                    <div className="order-name">
                        <h4>İsminizi Girin</h4>
                        <input
                            type="text"
                            name="name"
                            placeholder="İsminizi yazın..."
                            value={name}
                            onChange={handleNameChange}
                        />
                        {nameError && <p className="error-message">{nameError}</p>}
                    </div>

                    <div className="order-note">
                        <h4>Sipariş Notu</h4>
                        <textarea
                            placeholder="Siparişine eklemek istediğin bir not var mı?"
                            value={orderNote}
                            onChange={handleOrderNoteChange}
                        />
                    </div>

                    <div className="order-summary">
                        <div className="quantity-control">
                            <button onClick={() => handleQuantityChange(-1)}>-</button>
                            <span>{quantity}</span>
                            <button onClick={() => handleQuantityChange(1)}>+</button>
                        </div>

                        <div className="order-total">
                            <h4 className="summary-title">Sipariş Toplamı</h4>
                            <p className="summary-item">
                                Seçimler <span>{selectedExtras.length * extraPrice}₺</span>
                            </p>
                            <p className="summary-total">
                                Toplam <span>{(totalPrice * quantity).toFixed(2)}₺</span>
                            </p>

                            <button
                                type="button"
                                className="order-button"
                                data-cy="order-button"
                                onClick={handleSubmit}
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? "Gönderiliyor..." : "SİPARİŞ VER"}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Order;
