import * as TYPES from './actionTypes';

export const shuffleDeck = (deck) =>(
    {
        type: TYPES.SHUFFLE_DECK,
        payload: deck
    })
export const shuffleCompDeck = () => (
    {
        type: TYPES.SHUFFLE_COMP_DECK
    });

export const shuffleUserDeck = () => (
    {
        type: TYPES.SHUFFLE_USER_DECK
    });

export const drawCompCard = () => (
    {
        type: TYPES.DRAW_COMP_CARD
    });

export const drawUserCard = () => (
    {
        type: TYPES.DRAW_USER_CARD
    });

export const addCompPoint = () => (
    {
        type: TYPES.COMP_POINT
    });

export const addUserPoint = () => (
    {
        type: TYPES.USER_POINT
    });
export const renewPoints = () => (
    {
        type: TYPES.RENEW_POINTS
    });