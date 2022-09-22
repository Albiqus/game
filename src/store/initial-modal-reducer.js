const SET_INITIAL_MODAL_STATUS = 'SET_INITIAL_MODAL_STATUS'

const startState = {
modalStatus: true
}


export const initialModalReducer = (state = startState, action) => {
    switch (action.type) {
        case SET_INITIAL_MODAL_STATUS: {
            return {
                ...state,
                modalStatus: action.status
            }
        }
        default:
            return state;
    }
}

export const setInitialModalStatus = (status) => ({
    type: SET_INITIAL_MODAL_STATUS, status
})