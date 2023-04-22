import {createStore} from "redux";
import {gameReducer} from "../reducers/gameReducer";

const initialState =
    {
        name: 'Player',
        board:
            {
                    deck: [],
                    compDeck: [],
                    userDeck: [],
                    cPoints: 0,
                    uPoints: 0
            }
    };

const store = createStore(gameReducer, initialState);

export default store;