import pointBatata from "./../../assets/point-batata.png"
import limdomar from "./../../assets/Limdomar.png"
import jjPescador from "./../../assets/jj-Pescador.png"
import "./index.css"

const Patrocinadores = () => {
    return (
        <div className="containerPatrocinadores">
            <img className="logoPatrocinadores" src={pointBatata} alt="" />
            <img className="logoPatrocinadores" src={limdomar} alt="" />
            <img className="logoPatrocinadores" src={jjPescador} alt="" />
        </div>
    )
}

export default Patrocinadores;