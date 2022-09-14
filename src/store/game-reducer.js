import {
    getRandomNumber
} from "../utils/getRandomNumber";

const SET_GAME_STATUS = 'SET_GAME_STATUS'
const SET_POSITION = 'SET_POSITION'

const MOVE_LINE = 'MOVE_LINE'
const SET_CURRENT_LINE = 'SET_CURRENT_LINE'
const CHECK_PLAYER_LOCATION = 'CHECK_PLAYER_LOCATION'
const RESET_SETTINGS = 'RESET_SETTINGS'


const startState = {
    gameStatus: false,
    gameArea: [
        [{
            id: 1
        }, {
            id: 2
        }, {
            id: 3
        }, {
            id: 4
        }, {
            id: 5
        }, {
            id: 6
        }, {
            id: 7
        }, {
            id: 8
        }, {
            id: 9
        }, {
            id: 10
        }, {
            id: 11
        }, {
            id: 12
        }, {
            id: 13
        }, {
            id: 14
        }, {
            id: 15
        }],
        [{
            id: 16
        }, {
            id: 17
        }, {
            id: 18
        }, {
            id: 19
        }, {
            id: 20
        }, {
            id: 21
        }, {
            id: 22
        }, {
            id: 23
        }, {
            id: 24
        }, {
            id: 25
        }, {
            id: 26
        }, {
            id: 27
        }, {
            id: 28
        }, {
            id: 29
        }, {
            id: 30
        }],
        [{
            id: 31
        }, {
            id: 32
        }, {
            id: 33
        }, {
            id: 34
        }, {
            id: 35
        }, {
            id: 36
        }, {
            id: 37
        }, {
            id: 38
        }, {
            id: 39
        }, {
            id: 40
        }, {
            id: 41
        }, {
            id: 42
        }, {
            id: 43
        }, {
            id: 44
        }, {
            id: 45
        }],
        [{
            id: 46
        }, {
            id: 47
        }, {
            id: 48
        }, {
            id: 49
        }, {
            id: 50
        }, {
            id: 51
        }, {
            id: 52
        }, {
            id: 53
        }, {
            id: 54
        }, {
            id: 55
        }, {
            id: 56
        }, {
            id: 57
        }, {
            id: 58
        }, {
            id: 59
        }, {
            id: 60
        }],
        [{
            id: 61
        }, {
            id: 62
        }, {
            id: 63
        }, {
            id: 64
        }, {
            id: 65
        }, {
            id: 66
        }, {
            id: 67
        }, {
            id: 68
        }, {
            id: 69
        }, {
            id: 70
        }, {
            id: 71
        }, {
            id: 72
        }, {
            id: 73
        }, {
            id: 74
        }, {
            id: 75
        }],
        [{
            id: 76
        }, {
            id: 77
        }, {
            id: 78
        }, {
            id: 79
        }, {
            id: 80
        }, {
            id: 81
        }, {
            id: 82
        }, {
            id: 83
        }, {
            id: 84
        }, {
            id: 85
        }, {
            id: 86
        }, {
            id: 87
        }, {
            id: 88
        }, {
            id: 89
        }, {
            id: 90
        }],
        [{
            id: 91
        }, {
            id: 92
        }, {
            id: 93
        }, {
            id: 94
        }, {
            id: 95
        }, {
            id: 96
        }, {
            id: 97
        }, {
            id: 98
        }, {
            id: 99
        }, {
            id: 100
        }, {
            id: 101
        }, {
            id: 102
        }, {
            id: 103
        }, {
            id: 104
        }, {
            id: 105
        }],
        [{
            id: 106
        }, {
            id: 107
        }, {
            id: 108
        }, {
            id: 109
        }, {
            id: 110
        }, {
            id: 111
        }, {
            id: 112
        }, {
            id: 113
        }, {
            id: 114
        }, {
            id: 115
        }, {
            id: 116
        }, {
            id: 117
        }, {
            id: 118
        }, {
            id: 119
        }, {
            id: 120
        }],
        [{
            id: 121
        }, {
            id: 122
        }, {
            id: 123
        }, {
            id: 124
        }, {
            id: 125
        }, {
            id: 126
        }, {
            id: 127
        }, {
            id: 128
        }, {
            id: 129
        }, {
            id: 130
        }, {
            id: 131
        }, {
            id: 132
        }, {
            id: 133
        }, {
            id: 134
        }, {
            id: 135
        }],
        [{
            id: 136
        }, {
            id: 137
        }, {
            id: 138
        }, {
            id: 139
        }, {
            id: 140
        }, {
            id: 141
        }, {
            id: 142
        }, {
            id: 143
        }, {
            id: 144
        }, {
            id: 145
        }, {
            id: 146
        }, {
            id: 147
        }, {
            id: 148
        }, {
            id: 149
        }, {
            id: 150
        }],
        [{
            id: 151
        }, {
            id: 152
        }, {
            id: 153
        }, {
            id: 154
        }, {
            id: 155
        }, {
            id: 156
        }, {
            id: 157
        }, {
            id: 158
        }, {
            id: 159
        }, {
            id: 160
        }, {
            id: 161
        }, {
            id: 162
        }, {
            id: 163
        }, {
            id: 164
        }, {
            id: 165
        }],
        [{
            id: 166
        }, {
            id: 167
        }, {
            id: 168
        }, {
            id: 169
        }, {
            id: 170
        }, {
            id: 171
        }, {
            id: 172
        }, {
            id: 173
        }, {
            id: 174
        }, {
            id: 175
        }, {
            id: 176
        }, {
            id: 177
        }, {
            id: 178
        }, {
            id: 179
        }, {
            id: 180
        }],
        [{
            id: 181
        }, {
            id: 182
        }, {
            id: 183
        }, {
            id: 184
        }, {
            id: 185
        }, {
            id: 186
        }, {
            id: 187
        }, {
            id: 188
        }, {
            id: 189
        }, {
            id: 190
        }, {
            id: 191
        }, {
            id: 192
        }, {
            id: 193
        }, {
            id: 194
        }, {
            id: 195
        }],
        [{
            id: 196
        }, {
            id: 197
        }, {
            id: 198
        }, {
            id: 199
        }, {
            id: 200
        }, {
            id: 201
        }, {
            id: 202
        }, {
            id: 203
        }, {
            id: 204
        }, {
            id: 205
        }, {
            id: 206
        }, {
            id: 207
        }, {
            id: 208
        }, {
            id: 209
        }, {
            id: 210
        }],
        [{
            id: 211
        }, {
            id: 212
        }, {
            id: 213
        }, {
            id: 214
        }, {
            id: 215
        }, {
            id: 216
        }, {
            id: 217
        }, {
            id: 218
        }, {
            id: 219
        }, {
            id: 220
        }, {
            id: 221
        }, {
            id: 222
        }, {
            id: 223
        }, {
            id: 224
        }, {
            id: 225
        }]
    ],
    playerPositionId: 120,
    score: 0,

    lineIds: [1, 16, 31, 46, 61, 76, 91, 1000, 121, 136, 151, 166, 181, 196, 211],
    currentLine: 1,
    emptyElementId: 106,

    secondLineIds: [1, 16, 31, 46, 61, 76, 91, 1000, 121, 136, 151, 166, 181, 196, 211],
    secondLineStatus: false,
    currentSecondLine: 0,
    secondEmptyElementId: 106,

    thirdLineIds: [1, 16, 31, 46, 61, 76, 91, 1000, 121, 136, 151, 166, 181, 196, 211],
    thirdLineStatus: false,
    currentThirdLine: 0,
    thirdEmptyElementId: 106,
}

const topEdgeElements = [1, 16, 31, 46, 61, 76, 91, 106, 121, 136, 151, 166, 181, 196, 211];
const rightEdgeElements = [211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225];
const bottomEdgeElements = [15, 30, 45, 60, 75, 90, 105, 120, 135, 150, 165, 180, 195, 210, 225];
const leftEdgeElements = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

export const gameReducer = (state = startState, action) => {
    switch (action.type) {
         case SET_GAME_STATUS: {
             return {
                 ...state,
                 gameStatus: action.status
             }
         }
        case SET_POSITION: {
            let newPlayerPositionId = state.playerPositionId
            switch (action.payload.direction) {
                case 'ArrowUp': case 'w': {
                    if (!topEdgeElements.includes(state.playerPositionId)) {
                        newPlayerPositionId = state.playerPositionId - 1
                    }
                    break
                }
                case 'ArrowRight': case 'd':
                    if (!rightEdgeElements.includes(state.playerPositionId)) {
                        newPlayerPositionId = state.playerPositionId + 15
                    }
                    break
                case 'ArrowDown': case 's':
                    if (!bottomEdgeElements.includes(state.playerPositionId)) {
                        newPlayerPositionId = state.playerPositionId + 1
                    }
                    break
                case 'ArrowLeft': case 'a':
                    if (!leftEdgeElements.includes(state.playerPositionId)) {
                        newPlayerPositionId = state.playerPositionId - 15
                    }
                    break
                default:
                    newPlayerPositionId = state.playerPositionId
            }
            return {
                ...state,
                playerPositionId: newPlayerPositionId
            }
        }
        case CHECK_PLAYER_LOCATION: {

            let newGameStatus;
            const isAlivePlayer = () => {
                const firstLineIds = state.lineIds
                const secondLineIds = state.secondLineIds
                const thirdLineIds = state.thirdLineIds
                const playerPositionId = state.playerPositionId
                if (firstLineIds.includes(playerPositionId) || secondLineIds.includes(playerPositionId) || thirdLineIds.includes(playerPositionId)) {
                    newGameStatus = false
                } else {
                    newGameStatus = true
                }
                
            }

            isAlivePlayer()

            return {
                ...state,
                gameStatus: newGameStatus
            }
        }
        case RESET_SETTINGS: {
            return {
                ...state,
                playerPositionId: 120,
                score: 0,

                lineIds: [1, 16, 31, 46, 61, 76, 91, 1000, 121, 136, 151, 166, 181, 196, 211],
                currentLine: 1,
                emptyElementId: 106,

                secondLineIds: [1, 16, 31, 46, 61, 76, 91, 1000, 121, 136, 151, 166, 181, 196, 211],
                secondLineStatus: false,
                currentSecondLine: 0,
                secondEmptyElementId: 106,

                thirdLineIds: [1, 16, 31, 46, 61, 76, 91, 1000, 121, 136, 151, 166, 181, 196, 211],
                thirdLineStatus: false,
                currentThirdLine: 0,
                thirdEmptyElementId: 106,

            }
        }
        case MOVE_LINE: {

            let newLineIds = [...state.lineIds]
            let newEmptyElementId;

            const moveLine = () => {
                for (let i = 0; i < newLineIds.length; i++) {
                    if (state.currentLine === 15) {
                        newLineIds[i] = newLineIds[i] - 14
                        if (newLineIds[i] === 1000) {
                            newLineIds[i] = state.emptyElementId
                        }
                    } else {
                        newLineIds[i]++
                    }
                }
                if (state.currentLine === 15) {
                    let randomNumber = getRandomNumber(1, 14)
                    newEmptyElementId = newLineIds[randomNumber]
                    newLineIds[randomNumber] = 1000
                }
                if (typeof (newEmptyElementId) === 'undefined') {
                    newEmptyElementId = state.emptyElementId
                }
            }
            moveLine()

            let newSecondLineIds = [...state.secondLineIds]
            let newSecondEmptyElementId = state.secondEmptyElementId
            const moveSecondLine = () => {
                for (let i = 0; i < newSecondLineIds.length; i++) {
                    if (state.currentSecondLine === 15) {
                        newSecondLineIds[i] = newSecondLineIds[i] - 14
                        if (newSecondLineIds[i] === 1000) {
                            newSecondLineIds[i] = state.secondEmptyElementId
                        }
                    } else {
                        newSecondLineIds[i]++
                    }
                }
                if (state.currentSecondLine === 15) {
                    let randomNumber = getRandomNumber(1, 14)
                    newSecondEmptyElementId = newSecondLineIds[randomNumber]
                    newSecondLineIds[randomNumber] = 1000
                }

            }
            if (state.secondLineStatus) {
                moveSecondLine()
            }


            let newThirdLineIds = [...state.thirdLineIds]
            let newThirdEmptyElementId = state.thirdEmptyElementId
            const moveThirdLine = () => {
                for (let i = 0; i < newThirdLineIds.length; i++) {
                    if (state.currentThirdLine === 15) {
                        newThirdLineIds[i] = newThirdLineIds[i] - 14
                        if (newThirdLineIds[i] === 1000) {
                            newThirdLineIds[i] = state.thirdEmptyElementId
                        }
                    } else {
                        newThirdLineIds[i]++
                    }
                }
                if (state.currentThirdLine === 15) {
                    let randomNumber = getRandomNumber(1, 14)
                    newThirdEmptyElementId = newThirdLineIds[randomNumber]
                    newThirdLineIds[randomNumber] = 1000
                }

            }
            if (state.thirdLineStatus) {
                moveThirdLine()
            }

            return {
                ...state,
                lineIds: newLineIds,
                emptyElementId: newEmptyElementId,
                secondLineIds: newSecondLineIds,
                secondEmptyElementId: newSecondEmptyElementId,
                thirdLineIds: newThirdLineIds,
                thirdEmptyElementId: newThirdEmptyElementId,
            }
        }
        case SET_CURRENT_LINE: {

            let newScore = state.score
            let newCurrentLine = state.currentLine
            const setCurrentLine = () => {
                if (state.currentLine === 15) {
                    newScore++
                    newCurrentLine = 1
                } else {
                    newCurrentLine++
                }
            }
            setCurrentLine()

            let newSecondLineStatus = state.secondLineStatus
            const setSecondLineStatus = () => {
                if (newCurrentLine === 6) {
                    newSecondLineStatus = true
                }
            }
            setSecondLineStatus()

            let newThirdLineStatus = state.thirdLineStatus
            const setThirdLineStatus = () => {
                if (newCurrentLine === 11) {
                    newThirdLineStatus = true
                }
            }
            setThirdLineStatus()

            let newCurrentSecondLine = state.currentSecondLine
            const setCurrentSecondLine = () => {
                if (state.currentSecondLine === 15) {
                    newScore++
                    newCurrentSecondLine = 1
                } else {
                    newCurrentSecondLine++
                }
            }
            if (newSecondLineStatus) {
                setCurrentSecondLine()
            }

            let newCurrentThirdLine = state.currentThirdLine
            const setCurrentThirdLine = () => {
                if (state.currentThirdLine === 15) {
                    newScore++
                    newCurrentThirdLine = 1
                } else {
                    newCurrentThirdLine++
                }
            }
            if (newThirdLineStatus) {
                setCurrentThirdLine()
            }

            return {
                ...state,
                currentLine: newCurrentLine,
                secondLineStatus: newSecondLineStatus,
                currentSecondLine: newCurrentSecondLine,
                thirdLineStatus: newThirdLineStatus,
                currentThirdLine: newCurrentThirdLine,
                score: newScore
            }
        }
        default:
            return state;
    }
}


export const setGameStatus = (status) => ({
    type: SET_GAME_STATUS, status
})

export const setPosition = (direction) => ({
    type: SET_POSITION,
    payload: {
        direction
    }
})
export const moveLine = () => ({
    type: MOVE_LINE
})

export const setCurrentLine = (currentLine) => ({
    type: SET_CURRENT_LINE,
    currentLine
})


export const checkPlayerLocation = () => ({
    type: CHECK_PLAYER_LOCATION,
})

export const resetSettings = () => ({
    type: RESET_SETTINGS
})

