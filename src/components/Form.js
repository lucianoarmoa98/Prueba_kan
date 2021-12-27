import React, {useRef} from "react";
import { connect, useSelector } from "react-redux";
import {guardarText, alertInit} from "./redux/actions/action";

const Form = ({guardarText, alertInit}) => {
    const textRef = useRef(null);

    //----------------------------------------------------envia el texto al Form de pantalla y al reducer
    const handleSubmit = () => {
        //e.preventDefault();
        guardarText(textRef.current.value);
        alertInit();
    }

    //--------------------------se utiliza para obtener el estado del reducer y mostrar el texto con ternario si es true o no
    const alert = useSelector(state => state.reducerGlobal.showAlert);

    console.log('Form: ', alert);
    
    

    return (
        <div>
            <input type="text" ref={textRef}/>
            <button onClick={() => {guardarText(textRef.current.value)}} >Guardar</button>
            <button onClick={() => {alertInit()}} >{alert ? 'Ocultar': 'Mostrar'}</button>
            <button onClick={handleSubmit} >Guardar y mostrar boton</button>
        </div>
    )
}

//-------------------------------------------------------conectar con el store y acciones => actions
export default connect(null, {guardarText, alertInit})(Form);