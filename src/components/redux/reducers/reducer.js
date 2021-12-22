
//----------------------------------------------estados iniciales, se manejan los estados desde aqui
const initialState = {
    texto: '',
    showAlert: true,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'GUARDAR_TEXT':
            return {
                ...state,
                texto: action.payload
            };
        case 'SHOW_ALERT':
            return {
                ...state,
                //-----------------------------Para ocultar el boton con (!state.showAlert) o mostrar de forma normal (action.payload)
                showAlert: !state.showAlert
            }
        default:
            return state;
    }
}


// export default (state = initialState, action) => {
//     if (action.type === 'GUARDAR_TEXT') {
//         return {
//             ...state,
//             texto: action.payload
//         }
//     }
//     return state;
// }

// export const selectText = (state) => state.texto;