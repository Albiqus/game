const SET_REGISTER_MODAL_STATUS = 'SET_REGISTER_MODAL_STATUS'

const startState = {
    modalStatus: false
}


export const registerModalReducer = (state = startState, action) => {
    switch (action.type) {
        case SET_REGISTER_MODAL_STATUS: {
            return {
                ...state,
                modalStatus: action.status
            }
        }
        default:
            return state;
    }
}

export const setRegisterModalStatus = (status) => ({
    type: SET_REGISTER_MODAL_STATUS, status
})