import React from "react";
import { Box, Btn } from "../UI";
import { lista } from "../../info";

const List = () => {
    return <Box>{
        lista.cargos.map( ({id, type, value, from, date}) => {
        return  <div key={id}>
                <span>{ type }</span>
                <span>{ from }</span>
                <span>{ value }</span>
            </div>
        })
    }<Btn>Ver más</Btn>
    </Box>
}

export default List;