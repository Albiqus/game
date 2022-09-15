import { legacy_createStore, combineReducers } from "redux";
import { deathModalReducer } from "./death-modal-reducer";
import { gameReducer } from "./game-reducer";
import { menuModalReducer } from "./menu-modal-reducer";


let reducers = combineReducers({
    data: gameReducer,
    death: deathModalReducer,
    menu: menuModalReducer

})

let store = legacy_createStore(reducers)

export {store}