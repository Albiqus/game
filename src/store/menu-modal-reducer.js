const SET_MENU_MODAL_STATUS = 'SET_MENU_MODAL_STATUS'
const SET_CHARACTER_SELECTED = 'SET_CHARACTER_SELECTED'
const SET_MUSIC_VOLUME = 'SET_MUSIC_VOLUME'

const startState = {
    modalStatus: true,
    characterSelected: 'red',
    musicVolume: 10
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
        case SET_MUSIC_VOLUME: {
            return {
                ...state,
                musicVolume: action.volume
            }
        }
        default:
            return state;
    }
}

export const setMenuModalStatus = (status) => ({
    type: SET_MENU_MODAL_STATUS,
    status
})

export const setCharacterSelected = (characterSelected) => ({
    type: SET_CHARACTER_SELECTED,
    characterSelected
})

export const setMusicVolume = (volume) => ({
    type: SET_MUSIC_VOLUME,
    volume
})