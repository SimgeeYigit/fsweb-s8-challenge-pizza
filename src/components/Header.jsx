import logo from "../../images/iteration-1-images/logo.svg";

export default function Header({handleClick}) {
    return (
        <header>
            <div className="header">
                <div className="header-text">
                    <img className="logo" src={logo} alt="logo" />
                    <div className="header-content">
                        <p className="firsat-text">fırsatı kaçırma</p>
                        <h1 className="pizza-text">KOD ACIKTIRIR</h1>
                        <h1 className="pizza-text">PIZZA, DOYURUR</h1>
                        <button type="button" className="btn" onClick={handleClick}>ACIKTIM</button>
                    </div>
                </div>
            </div>
        </header>
    );
}

