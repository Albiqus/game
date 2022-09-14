const SET_MENU_MODAL_STATUS = 'SET_MENU_MODAL_STATUS'
const SET_CHARACTER_SELECTED = 'SET_CHARACTER_SELECTED'

const startState = {
    modalStatus: true,
    characterSelected: 'red'
}


export const menuModalReducer = (state = startState, action) => {
    switch (action.type) {
        case SET_MENU_MODAL_STATUS: {
            let newModalStatus = action.status
            return {
                ...state,
                modalStatus: newModalStatus
            }
        }
            case SET_CHARACTER_SELECTED: {
                let newCharacterSelected = action.characterSelected
                return {
                    ...state,
                    characterSelected: newCharacterSelected
                }
            }
        default:
            return state;
    }
}

export const setMenuModalStatus = (status) => ({
    type: SET_MENU_MODAL_STATUS, status
})

export const setCharacterSelected = (characterSelected) => ({
    type: SET_CHARACTER_SELECTED,
    characterSelected
})