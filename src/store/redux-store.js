import { legacy_createStore, combineReducers } from "redux";
import { gameReducer } from "./game-reducer";



let reducers = combineReducers({
    data: gameReducer,
})

let store = legacy_createStore(reducers)

export {store}