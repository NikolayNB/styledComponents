import alimentacion from './assets/alimentacion.svg';
import { Icono } from './Components/UI';

export default () => {
    const Images = {
        Restaurante: <Icono src={alimentacion} alt="icono restaurante"/>,
    };

    return Images;
};