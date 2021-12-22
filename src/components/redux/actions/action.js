//-------------------------------------------------------manejador de acciones o eventos, se agregan los eventos a los botones desde aqui

export const guardarText = (text) => {
    return {
        type: 'GUARDAR_TEXT',
        payload: text
    }
}

export const alertInit = (alert) => {
    return {
        type: 'SHOW_ALERT',
        payload: alert
    }
}
