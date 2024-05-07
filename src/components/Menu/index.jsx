import { useState } from "react";
import LogoReal from "./../../assets/logo.png"
import { FiList, FiFacebook } from "react-icons/fi"
import './index.css';

function Menu() {

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }
    return (
        <div className="container">
            <FiList size={30} onClick={toggleMenu} />
            {menuOpen && (
                <div>
                    <ul>
                        <li>Loja Virtual</li>
                        <li>Liga</li>
                        <li>Sobre</li>
                    </ul>
                </div>
            )}
            <div>
                <img className="imagemLogo" src={LogoReal} alt="Real Madruga Torcida" />
            </div>
             <FiFacebook size={30}/>
            <div>
                
            </div>
        </div>
    )
}

export default Menu;