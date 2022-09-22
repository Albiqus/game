import { legacy_createStore, combineReducers } from "redux";
import { deathModalReducer } from "./death-modal-reducer";
import { gameReducer } from "./game-reducer";
import { infoPageReducer } from "./info-page-reducer";
import { initialModalReducer } from "./initial-modal-reducer";
import { menuModalReducer } from "./menu-modal-reducer";


let reducers = combineReducers({
    data: gameReducer,
    death: deathModalReducer,
    menu: menuModalReducer,
    info: infoPageReducer,
    initial: initialModalReducer

})

let store = legacy_createStore(reducers)

export {store}