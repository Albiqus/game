const SET_MODAL_STATUS = 'SET_MODAL_STATUS'

const startState = {
modalStatus: false
}


export const deathModalReducer = (state = startState, action) => {
    switch (action.type) {
        case SET_MODAL_STATUS: {
            let newModalStatus = action.status
            return {
                ...state,
                modalStatus: newModalStatus
            }
        }
        default:
            return state;
    }
}

export const setDeathModalStatus = (status) => ({
    type: SET_MODAL_STATUS, status
})