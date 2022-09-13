import { legacy_createStore, combineReducers } from "redux";
import { deathModalReducer } from "./death-modal-reducer";
import { gameReducer } from "./game-reducer";



let reducers = combineReducers({
    data: gameReducer,
    death: deathModalReducer,

})

let store = legacy_createStore(reducers)

export {store}