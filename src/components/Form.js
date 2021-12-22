import React, {useRef} from "react";
import { connect } from "react-redux";
import {guardarText, alertInit} from "./redux/actions/action";

const Form = ({guardarText, alertInit}) => {
    const textRef = useRef(null);

    //----------------------------------------------------envia el texto al Form de pantalla y al reducer
    const handleSubmit = () => {
        //e.preventDefault();
        guardarText(textRef.current.value);
        alertInit();
    }
    
    

    return (
        <div>
            <input type="text" ref={textRef}/>
            <button onClick={() => {guardarText(textRef.current.value)}} >Guardar</button>
            <button onClick={() => {alertInit()}} >Alert-ocultar</button>
            <button onClick={handleSubmit} >Guardar y mostrar boton</button>
        </div>
    )
}

//-------------------------------------------------------conectar con el store y acciones => actions
export default connect(null, {guardarText, alertInit})(Form);