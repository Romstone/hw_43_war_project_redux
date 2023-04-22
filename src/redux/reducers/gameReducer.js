import * as TYPES from '../actions/actionTypes';
import {CHANGE_USER_NAME} from "../actions/actionTypes";

export function gameReducer(state, action)
{
    switch (action.type)
    {
        case CHANGE_USER_NAME:
            return {
                ...state,
                name: action.payload
            }
        case TYPES.SHUFFLE_DECK:
            return {
                ...state,
                board: {...state.board, deck: action.payload}
            }
        case TYPES.SHUFFLE_COMP_DECK:
        {
            const compDeck = state.board.deck.slice(state.board.deck.length / 2);
            return {
                ...state,
                board: {...state.board, compDeck}
            };
        }
        case TYPES.SHUFFLE_USER_DECK:
        {
            const userDeck = state.board.deck.slice(0, state.board.deck.length / 2);
            return {
                ...state,
                board: {...state.board, userDeck}
            };
        }
        case TYPES.COMP_POINT:
        {
            const cPoints = state.board.cPoints + 1;
            return {
                ...state,
                board: {...state.board, cPoints}
            }
        }
        case TYPES.USER_POINT:
        {
            const uPoints = state.board.uPoints + 1;
            return {
                ...state,
                board: {...state.board, uPoints}
            }
        }
        case TYPES.RENEW_POINTS:
        {
            return {
                ...state,
                board: {...state.board, cPoints: 0, uPoints: 0}
            }
        }
        default:
            return state;
    }
}