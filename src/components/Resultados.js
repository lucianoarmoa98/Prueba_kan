import React from "react";
import { useSelector } from "react-redux";


const Resultados = () => {
    //----------------------------------------------------envia el texto al Form
    const textos = useSelector(state => state.reducerGlobal.texto);
    console.log('Result: ', textos);
    return (
        <div>
            <h1>Resultado:</h1>
            <h1>{textos}</h1>
        </div>
    )
}


// const  mapStateToProps = (state) => {
//     console.log('mapStateToProps: ', state);
//     return {
//         text: state.text
//     }
// }

export default Resultados;