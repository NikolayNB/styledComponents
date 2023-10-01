import {
    fondoClaro,
    contenidoClaro,
    textoFondoClaro,
    fondoOscuro,
    contenidoOscuro,
    textoFondoOscuro,
} from "./variables";

export const temaClaro = {
    body: fondoClaro,
    text: textoFondoClaro,
    inside: contenidoClaro,
    filter: "",
}

export const temaOscuro = {
    body: fondoOscuro,
    text: textoFondoOscuro,
    inside: contenidoOscuro,
    filter: "invert(100%)"
}