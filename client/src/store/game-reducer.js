import {
    bonuses
} from "../data/data";
import {
    getRandomNumber
} from "../utils/getRandomNumber";

const SET_NICK_NAME = 'SET_NICK_NAME'
const SET_USER_ID = 'SET_USER_ID'
const SET_GAME_STATUS = 'SET_GAME_STATUS'
const SET_POSITION = 'SET_POSITION'

const MOVE_LINE = 'MOVE_LINE'
const SET_CURRENT_LINE = 'SET_CURRENT_LINE'
const MAKE_PLAYER_INTERACTION = 'MAKE_PLAYER_INTERACTION'
const RESET_SETTINGS = 'RESET_SETTINGS'
const SPEED_UP = 'SPEED_UP'

const CHECK_BONUS_LUCK = 'CHECK_BONUS_LUCK'
const SET_BONUS = 'SET_BONUS'
const MOVE_BONUSES = 'MOVE_BONUSES'
const REMOVE_WASTE_BONUS = 'REMOVE_WASTE_BONUS'

const SET_SLOWDOWN_EFFECT = 'SET_SLOWDOWN_EFFECT'
const REDUCE_TIME_SLOWDOWN_EFFECT = 'REDUCE_TIME_SLOWDOWN_EFFECT'
const SET_STRENGTH_EFFECT = 'SET_STRENGTH_EFFECT'
const REDUCE_TIME_STRENGTH_EFFECT = 'REDUCE_TIME_STRENGTH_EFFECT'
const SET_WIDE_AISLE_EFFECT = 'SET_WIDE_AISLE_EFFECT'
const REDUCE_TIME_WIDE_AISLE_EFFECT = 'REDUCE_TIME_WIDE_AISLE_EFFECT'

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

    bonusArea: [1, 16, 31, 46, 61, 76, 91, 106, 121, 136, 151, 166, 181, 196, 211],
    bonuses: [{
            id: null,
            effect: 'slowdown',
        },
        {
            id: null,
            effect: 'strength'
        },
        {
            id: null,
            effect: 'wideAisle'
        }
    ],
    bonusCounter: 9,
    speedCounter: 0,
    newBonus: null,

    slowdownStatus: null,
    slowdownEffectSeconds: null,

    strengthStatus: null,
    strengthEffectSeconds: null,

    wideAisleStatus: null,
    wideAisleEffectSeconds: null,

    playerPositionId: 120,
    nickName: null,
    id: null,
    score: 0,
    bestScore: 0,
    bestScores: null,

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

    interval: 400,
    slowdonInterval: null
}

const topEdgeElements = [1, 16, 31, 46, 61, 76, 91, 106, 121, 136, 151, 166, 181, 196, 211];
const rightEdgeElements = [211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225];
const bottomEdgeElements = [15, 30, 45, 60, 75, 90, 105, 120, 135, 150, 165, 180, 195, 210, 225];
const leftEdgeElements = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

export const gameReducer = (state = startState, action) => {
    switch (action.type) {
        case SET_NICK_NAME: {
            return {
                ...state,
                nickName: action.nickName
            }
        }
        case SET_USER_ID: {
            return {
                ...state,
                id: action.id
            }
        }

        case SET_GAME_STATUS: {
            return {
                ...state,
                gameStatus: action.status
            }
        }
        case SET_POSITION: {
            let newPlayerPositionId = state.playerPositionId
            switch (action.payload.direction) {
                case 'ArrowUp':
                case 'w':
                case '??': {
                    if (!topEdgeElements.includes(state.playerPositionId)) {
                        newPlayerPositionId = state.playerPositionId - 1
                    }
                    break
                }
                case 'ArrowRight':
                case 'd':
                case '??':
                    if (!rightEdgeElements.includes(state.playerPositionId)) {
                        newPlayerPositionId = state.playerPositionId + 15
                    }
                    break
                case 'ArrowDown':
                case 's':
                case '??':
                    if (!bottomEdgeElements.includes(state.playerPositionId)) {
                        newPlayerPositionId = state.playerPositionId + 1
                    }
                    break
                case 'ArrowLeft':
                case 'a':
                case '??':
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
        case MAKE_PLAYER_INTERACTION: {

            let newGameStatus;
            let firstLineIds = state.lineIds
            let secondLineIds = state.secondLineIds
            let thirdLineIds = state.thirdLineIds
            let playerPositionId = state.playerPositionId

            const isAlivePlayer = () => {
                if (firstLineIds.includes(playerPositionId) || secondLineIds.includes(playerPositionId) || thirdLineIds.includes(playerPositionId)) {
                    if (state.strengthStatus === 'strength' || state.strengthStatus === 'new strength') {
                        newGameStatus = true
                        if (firstLineIds.includes(playerPositionId)) {
                            firstLineIds[firstLineIds.indexOf(playerPositionId)] = 1000;
                        }
                        if (secondLineIds.includes(playerPositionId)) {
                            secondLineIds[secondLineIds.indexOf(playerPositionId)] = 1000;
                        }
                        if (thirdLineIds.includes(playerPositionId)) {
                            thirdLineIds[thirdLineIds.indexOf(playerPositionId)] = 1000;
                        }
                    } else {
                        newGameStatus = false
                    }

                } else {
                    newGameStatus = true
                }
            }
            isAlivePlayer()

            let newSlowdownStatus = state.slowdownStatus
            let newStrengthStatus = state.strengthStatus
            let newWideAisleStatus = state.wideAisleStatus
            let newBonuses = state.bonuses

            const whetherEffectTaken = () => {
                const playerPositionId = state.playerPositionId
                if (newBonuses[0].id === playerPositionId) {
                    if (newSlowdownStatus === 'slowdown') {
                        newSlowdownStatus = 'new slowdown'
                    } else {
                        newSlowdownStatus = 'slowdown'
                    }
                    newBonuses[0].id = null
                }
                if (newBonuses[1].id === playerPositionId) {
                    if (newStrengthStatus === 'strength') {
                        newStrengthStatus = 'new strength'
                    } else {
                        newStrengthStatus = 'strength'
                    }
                    newBonuses[1].id = null
                }
                if (newBonuses[2].id === playerPositionId) {
                    if (newWideAisleStatus === 'wideAisle') {
                        newWideAisleStatus = 'new wideAisle'
                    } else {
                        newWideAisleStatus = 'wideAisle'
                    }
                    newBonuses[2].id = null
                }
                return newSlowdownStatus
            }

            newSlowdownStatus = whetherEffectTaken()

            return {
                ...state,
                gameStatus: newGameStatus,
                slowdownStatus: newSlowdownStatus,
                strengthStatus: newStrengthStatus,
                wideAisleStatus: newWideAisleStatus,
                bonuses: newBonuses,

                lineIds: firstLineIds,
                secondLineIds: secondLineIds,
                thirdLineIds: thirdLineIds
            }
        }
        case CHECK_BONUS_LUCK: {
            let newBonusCounter = state.bonusCounter
            let newNewBonus = state.newBonus
            if (state.bonusCounter === 10) {
                let luck = getRandomNumber(0, 1)
                if (state.score < 10) {
                    luck = 1
                }
                if (luck === 1 || luck === 0) { //???? ???????????? ?????????????? ???????????? ??????????????
                    newNewBonus = bonuses[getRandomNumber(0, 2)]
                }
                newBonusCounter = 0
            }
            return {
                ...state,
                bonusCounter: newBonusCounter,
                newBonus: newNewBonus
            }
        }
        case SET_BONUS: {

            let newBonuses = state.bonuses
            let randomNumber = getRandomNumber(1, 14)
            let bonusArea = state.bonusArea
            if (action.effect === 'slowdown') {
                newBonuses[0].id = bonusArea[randomNumber]
            }
            if (action.effect === 'strength') {
                newBonuses[1].id = bonusArea[randomNumber]
            }
            if (action.effect === 'wideAisle') {
                newBonuses[2].id = bonusArea[randomNumber]
            }
            return {
                ...state,
                bonuses: newBonuses,
                newBonus: null
            }
        }
        case RESET_SETTINGS: {
            return {
                ...state,
                bonusArea: [1, 16, 31, 46, 61, 76, 91, 106, 121, 136, 151, 166, 181, 196, 211],
                bonuses: [{
                        id: null,
                        effect: 'slowdown',
                    },
                    {
                        id: null,
                        effect: 'strength'
                    },
                    {
                        id: null,
                        effect: 'wideAisle'
                    }
                ],
                bonusCounter: 9,
                speedCounter: 0,
                newBonus: null,

                slowdownStatus: null,
                slowdownEffectSeconds: null,

                strengthStatus: null,
                strengthEffectSeconds: null,

                wideAisleStatus: null,
                wideAisleEffectSeconds: null,

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

                interval: 400,
                slowdonInterval: null
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
                        if (newLineIds[i] === 999) {
                            newLineIds[i] = state.emptyElementId - 15
                        }
                        if (newLineIds[i] === 1001) {
                            newLineIds[i] = state.emptyElementId + 15
                        }
                    } else {
                        newLineIds[i]++
                    }
                }
                if (state.currentLine === 15) {
                    let randomNumber = getRandomNumber(1, 14)
                    newLineIds = [1, 16, 31, 46, 61, 76, 91, 106, 121, 136, 151, 166, 181, 196, 211]
                    newEmptyElementId = newLineIds[randomNumber]
                    newLineIds[randomNumber] = 1000
                    if (state.wideAisleStatus === 'wideAisle' || state.wideAisleStatus === 'new wideAisle') {
                        newLineIds[randomNumber - 1] = 999
                        newLineIds[randomNumber + 1] = 1001
                    }
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
                        if (newSecondLineIds[i] === 999) {
                            newSecondLineIds[i] = state.secondEmptyElementId - 15
                        }
                        if (newSecondLineIds[i] === 1001) {
                            newSecondLineIds[i] = state.secondEmptyElementId + 15
                        }
                    } else {
                        newSecondLineIds[i]++
                    }
                }
                if (state.currentSecondLine === 15) {
                    let randomNumber = getRandomNumber(1, 14)
                    newSecondLineIds = [1, 16, 31, 46, 61, 76, 91, 106, 121, 136, 151, 166, 181, 196, 211]
                    newSecondEmptyElementId = newSecondLineIds[randomNumber]
                    newSecondLineIds[randomNumber] = 1000
                    if (state.wideAisleStatus === 'wideAisle' || state.wideAisleStatus === 'new wideAisle') {
                        newSecondLineIds[randomNumber - 1] = 999
                        newSecondLineIds[randomNumber + 1] = 1001
                    }
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
                        if (newThirdLineIds[i] === 999) {
                            newThirdLineIds[i] = state.thirdEmptyElementId - 15
                        }
                        if (newThirdLineIds[i] === 1001) {
                            newThirdLineIds[i] = state.thirdEmptyElementId + 15
                        }
                    } else {
                        newThirdLineIds[i]++
                    }
                }
                if (state.currentThirdLine === 15) {
                    let randomNumber = getRandomNumber(1, 14)
                    newThirdLineIds = [1, 16, 31, 46, 61, 76, 91, 106, 121, 136, 151, 166, 181, 196, 211]
                    newThirdEmptyElementId = newThirdLineIds[randomNumber]
                    newThirdLineIds[randomNumber] = 1000
                    if (state.wideAisleStatus === 'wideAisle' || state.wideAisleStatus === 'new wideAisle') {
                        newThirdLineIds[randomNumber - 1] = 999
                        newThirdLineIds[randomNumber + 1] = 1001
                    }
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
            let newBonusCounter = state.bonusCounter
            let newCurrentLine = state.currentLine
            let newSpeedCounter = state.speedCounter

            const setCurrentLine = () => {
                if (state.currentLine === 15) {
                    newScore++
                    newBonusCounter++
                    newCurrentLine = 1
                    newSpeedCounter++

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
                    newBonusCounter++
                    newCurrentSecondLine = 1
                    newSpeedCounter++
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
                    newBonusCounter++
                    newCurrentThirdLine = 1
                    newSpeedCounter++

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
                score: newScore,
                bonusCounter: newBonusCounter,
                speedCounter: newSpeedCounter
            }
        }
        case MOVE_BONUSES: {
            let newBonuses = state.bonuses;
            for (let i = 0; i < newBonuses.length; i++) {
                if (newBonuses[i].id !== null) {
                    newBonuses[i].id++
                }
            }
            return {
                ...state,
                bonuses: newBonuses
            }
        }
        case REMOVE_WASTE_BONUS: {
            let newBonuses = state.bonuses;
            for (let i = 0; i < newBonuses.length; i++) {
                if (topEdgeElements.includes(newBonuses[i].id)) {
                    newBonuses[i].id = null
                }
            }
            return {
                ...state,
                bonuses: newBonuses
            }
        }
        case SET_SLOWDOWN_EFFECT: {
            let newSlowdownEffectSeconds = 15
            let newSlowdonInterval = state.interval * 1.4
            return {
                ...state,
                slowdownEffectSeconds: newSlowdownEffectSeconds,
                slowdonInterval: newSlowdonInterval
            }
        }
        case REDUCE_TIME_SLOWDOWN_EFFECT: {
            let newSlowdownEffectSeconds = state.slowdownEffectSeconds
            let newSlowdownStatus = state.slowdownStatus
            let newSlowdonInterval = state.slowdonInterval
            if (state.slowdownStatus !== null) {
                newSlowdownEffectSeconds--
            }
            if (newSlowdownEffectSeconds === -1) {
                newSlowdownEffectSeconds = null
                newSlowdownStatus = null
                newSlowdonInterval = null
            }
            return {
                ...state,
                slowdownEffectSeconds: newSlowdownEffectSeconds,
                slowdownStatus: newSlowdownStatus,
                slowdonInterval: newSlowdonInterval
            }
        }
        case SET_STRENGTH_EFFECT: {
            let newStrengthEffectSeconds = 10
            return {
                ...state,
                strengthEffectSeconds: newStrengthEffectSeconds
            }
        }
        case REDUCE_TIME_STRENGTH_EFFECT: {
            let newStrengthEffectSeconds = state.strengthEffectSeconds
            let newStrengthStatus = state.strengthStatus

            if (state.strengthStatus !== null) {
                newStrengthEffectSeconds--
            }
            if (newStrengthEffectSeconds === -1) {
                newStrengthEffectSeconds = null
                newStrengthStatus = null
            }
            return {
                ...state,
                strengthEffectSeconds: newStrengthEffectSeconds,
                strengthStatus: newStrengthStatus,
            }
        }
        case SET_WIDE_AISLE_EFFECT: {
            let newWideAisleEffectSeconds = 20
            let newLineIds = state.lineIds
            let newSecondLineIds = state.secondLineIds
            let newThirdLineIds = state.thirdLineIds

            for (let i = 0; i < newLineIds.length; i++) {
                if (newLineIds[i] > 900) {
                    newLineIds[i - 1] = 999
                    newLineIds[i + 1] = 1001
                    i++
                }
            }
            for (let i = 0; i < newSecondLineIds.length; i++) {
                if (newSecondLineIds[i] > 900) {
                    newSecondLineIds[i - 1] = 999
                    newSecondLineIds[i + 1] = 1001
                    i++
                }
            }
            for (let i = 0; i < newThirdLineIds.length; i++) {
                if (newThirdLineIds[i] > 900) {
                    newThirdLineIds[i - 1] = 999
                    newThirdLineIds[i + 1] = 1001
                    i++
                }
            }
            return {
                ...state,
                wideAisleEffectSeconds: newWideAisleEffectSeconds,
                lineIds: newLineIds,
                secondLineIds: newSecondLineIds,
                thirdLineIds: newThirdLineIds
            }
        }
        case REDUCE_TIME_WIDE_AISLE_EFFECT: {
            let newWideAisleEffectSeconds = state.wideAisleEffectSeconds
            let newWideAisleStatus = state.wideAisleStatus

            if (state.wideAisleStatus !== null) {
                newWideAisleEffectSeconds--
            }
            if (newWideAisleEffectSeconds === -1) {
                newWideAisleEffectSeconds = null
                newWideAisleStatus = null
            }
            return {
                ...state,
                wideAisleEffectSeconds: newWideAisleEffectSeconds,
                wideAisleStatus: newWideAisleStatus,
            }
        }
        case SPEED_UP: {
            let newInterval = state.interval
            let newSpeedCounter = state.speedCounter
            if (newSpeedCounter === 5) {
                newInterval -= 10
                newSpeedCounter = 0
            }
            if (newInterval === 250) {
                newSpeedCounter = null
            }
            return {
                ...state,
                interval: newInterval,
                speedCounter: newSpeedCounter
            }
        }
        default:
            return state;
    }
}



export const setNickName = (nickName) => ({
    type: SET_NICK_NAME,
    nickName
})

export const setUserId = (id) => ({
    type: SET_USER_ID,
    id
})

export const setGameStatus = (status) => ({
    type: SET_GAME_STATUS,
    status
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


export const makePlayerInteraction = () => ({
    type: MAKE_PLAYER_INTERACTION,
})

export const resetSettings = () => ({
    type: RESET_SETTINGS
})


export const checkBonusLuck = () => ({
    type: CHECK_BONUS_LUCK
})


export const setBonus = (effect) => ({
    type: SET_BONUS,
    effect
})

export const moveBonus = () => ({
    type: MOVE_BONUSES
})

export const removeWasteBonus = () => ({
    type: REMOVE_WASTE_BONUS
})

export const setSlowdownEffect = () => ({
    type: SET_SLOWDOWN_EFFECT
})

export const reduceTimeSlowdownEffect = () => ({
    type: REDUCE_TIME_SLOWDOWN_EFFECT
})

export const setStrengthEffect = () => ({
    type: SET_STRENGTH_EFFECT
})


export const reduceTimeStrengthEffect = () => ({
    type: REDUCE_TIME_STRENGTH_EFFECT
})

export const setWideAisleEffect = () => ({
    type: SET_WIDE_AISLE_EFFECT
})

export const reduceTimeWideAisleEffect = () => ({
    type: REDUCE_TIME_WIDE_AISLE_EFFECT
})

export const speedUp = () => ({
    type: SPEED_UP
})