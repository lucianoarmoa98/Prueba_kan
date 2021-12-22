import React from "react";
import { connect, useSelector } from "react-redux";


const Result = () => {
    const [mostrar, setMostrar] = React.useState(true);
    const [titulo, setTitulo] = React.useState("Ocultar");

    //----------------------------------------------------se utiliza para obtener el estado del reducer
    const textos = useSelector(state => state.reducerGlobal.texto);
    const alert = useSelector(state => state.reducerGlobal.showAlert);



    //-------------------------------------------------------mostrar o ocultar el boton con titulo
    const handleClick = () => {
        setMostrar(!mostrar);
        setTitulo(mostrar ? "Mostrar" : "Ocultar");
    }



    console.log('Result: ', alert);

    return (
        <div>
            {alert &&
                <div>
                    <h1>Se muestra desde el componente de Form.js</h1>
                    <h3>{textos}</h3>
                </div>
            }

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

export default Result;