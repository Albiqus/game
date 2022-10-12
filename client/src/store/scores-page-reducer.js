const SET_SCORES_PAGE_STATUS = 'SET_SCORES_MODAL_STATUS'
const SET_PLAYERS_SCORES = 'SET_PLAYERS_SCORES'
const SET_PLAYER_SCORES = 'SET_PLAYER_SCORES'

const startState = {
    scoresPageStatus: false,
    playersScores: null,
    playerScores: null
}


export const scoresPageReducer = (state = startState, action) => {
    switch (action.type) {
        case SET_SCORES_PAGE_STATUS: {
            return {
                ...state,
                scoresPageStatus: action.status
            }
        }
        case SET_PLAYERS_SCORES: {
            return {
                ...state,
                playersScores: action.scores
            }
        }
        case SET_PLAYER_SCORES: {
            return {
                ...state,
                playerScores: action.scores
            }
        }
        default:
            return state;
    }
}

export const setScoresPageStatus = (status) => ({
    type: SET_SCORES_PAGE_STATUS,
    status
})

export const setPlayersScores = (scores) => ({
    type: SET_PLAYERS_SCORES,
    scores
})


export const setPlayerScores = (scores) => ({
    type: SET_PLAYER_SCORES,
    scores
})
