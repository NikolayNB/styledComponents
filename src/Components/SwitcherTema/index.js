import React from "react";
import themeOn from "../../assets/images/themeOn.svg";
import themeOff from "../../assets/images/themeOff.svg";
import { Icono } from "../UI";


export default (tema) => {
    const claro = <Icono src={themeOn} alt="temaClaro" />;
    const oscuro = <Icono src={themeOff} alt="temaOscuro" />;

    return <>{tema ? oscuro : claro}</>;
}