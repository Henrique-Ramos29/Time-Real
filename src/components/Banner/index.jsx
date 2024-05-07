import React from "react";
import bannerMadruga from "../../assets/fundo.jpeg"
import "./index.css"

const Banner = () => {
    return(
         <div className="containerMadruga">
           <img className="bannerMadruga" src={bannerMadruga} width={500} height={400}/>
         </div>
    )
}

export default Banner;