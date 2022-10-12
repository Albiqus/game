import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { deathModalReducer } from "./death-modal-reducer";
import { gameReducer } from "./game-reducer";
import { infoPageReducer } from "./info-page-reducer";
import { initialModalReducer } from "./initial-modal-reducer";
import { menuModalReducer } from "./menu-modal-reducer";
import { registerModalReducer } from "./register-modal-reducer";
import { scoresPageReducer } from "./scores-page-reducer";


let reducers = combineReducers({
    data: gameReducer,
    death: deathModalReducer,
    menu: menuModalReducer,
    info: infoPageReducer,
    initial: initialModalReducer,
    register: registerModalReducer,
    scores: scoresPageReducer

})

let store = legacy_createStore(reducers, applyMiddleware(thunk))

export {store}