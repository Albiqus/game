import {
    setNickName, setUserId
} from "../store/game-reducer"
import { setPlayerScores, setPlayersScores } from "../store/scores-page-reducer";



export const registerPlayerScoreInGeneralScores = (nickName, score) => {
    return async (dispatch) => {
         const newPlayer = {
             "nickName": nickName,
             "score": score
         }
         fetch("http://localhost:3001/api/score", {
             method: 'POST',
             headers: {
                 'Content-Type': 'application/json; charset=utf-8'
             },
             body: JSON.stringify(newPlayer)
         })
     }
 }

 export const getPlayersScores = () => {
     return async (dispatch) => {
         await fetch("http://localhost:3001/api/scores", {
             method: 'GET',
             headers: {
                 'Content-Type': 'application/json; charset=utf-8'
             },
         }).then(function (response) {
             return response.json()
         }).then(function (data) {
             dispatch(setPlayersScores(data))
         });
     }
 }

 export const getPlayerScores = (id) => {
     return async (dispatch) => {
         await fetch(`http://localhost:3001/api/player/scores/${id}`, {
             method: 'GET',
             headers: {
                 'Content-Type': 'application/json; charset=utf-8'
             }
         }).then(function (response) {
             return response.json()
         }).then(function (data) {
             dispatch(setPlayerScores(data))
         });
     }
 }

export const registerPlayer = (nickName) => {
    return (dispatch) => {
        const newPlayer = {
            "nickName": nickName,
        }
        fetch("http://localhost:3001/api/player", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
            body: JSON.stringify(newPlayer)
        }).then(function (response) {
            return response.json();
        }).then(function (response) {
            dispatch(setNickName(response.nick_name))
            dispatch(setUserId(response.id))
        })

    }
}

export const registerPlayerScore = (id, nickName, score) => {
    return (dispatch) => {
        const newPlayerScore = {
            "nickName": nickName,
            "score": score,
            "id": id
        }
        fetch("http://localhost:3001/api/player/score", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
            body: JSON.stringify(newPlayerScore)
        }).then(function (response) {
            return response.json();
        }).then(function (response) {
           
        })

    }
}