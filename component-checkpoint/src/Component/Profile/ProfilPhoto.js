import React from "react";
import Imag from "./slider-facebook-new-profile.jpg"
import "./style.css"

const ProfilPhoto = () => {
    return(
        <div className="image">
        <img className="avatar" src={Imag} alt="profil-photo" />
        </div>
    )
}

export default ProfilPhoto