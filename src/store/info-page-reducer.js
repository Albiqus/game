const SET_INFO_PAGE_STATUS = 'SET_INFO_MODAL_STATUS'

const startState = {
infoPageStatus: false
}


export const infoPageReducer = (state = startState, action) => {
    switch (action.type) {
        case SET_INFO_PAGE_STATUS: {
            console.log(action.status)
            return {
                ...state,
                infoPageStatus: action.status
            }
        }
        default:
            return state;
    }
}

export const setInfoPageStatus = (status) => ({
    type: SET_INFO_PAGE_STATUS, status
})