//use this when api doesn't work
// import {deckShuffler} from "../utils/instruments";
// import {deck} from "../utils/constants";
import React, {useEffect, useState} from 'react';
import * as Actions from '../redux/actions/boardActions';
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import DataRepository from "../repository/repository";

const Game = () =>
{
    const dataRepository = new DataRepository();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const name = useSelector(state => state.name);
    const board = useSelector(state => state.board);
    const[cardState, setCardState] = useState({compCard: '', userCard: ''});

    useEffect(() => {
        dispatch(Actions.renewPoints());
        const deck = dataRepository.getDeck();
        dispatch(Actions.shuffleDeck(deck));
        dispatch(Actions.shuffleCompDeck());
        dispatch(Actions.shuffleUserDeck());
    }, []);

    const drawCards = () =>
    {
        if (board.compDeck.length > 0)
        {
            const compCard = board.compDeck.pop();
            const userCard = board.userDeck.pop();
            console.log(`Comp: ${compCard.value}, User: ${userCard.value}`);
            if (+compCard.value > +userCard.value)
            {
                dispatch(Actions.addCompPoint());
                setCardState({...cardState, compCard: compCard, userCard: userCard});
            }
            else if (+compCard.value < + userCard.value)
            {
                dispatch(Actions.addUserPoint());
                setCardState({...cardState, compCard: compCard, userCard: userCard});
            }
            else
                setCardState({...cardState, compCard: compCard, userCard: userCard});
        } else
        {
            navigate("/result");
        }
    }

    return (
        <div className={'container field'}>
            <div className={'half-field'}>
                <h1>Computer</h1>
                <h3>Points: {board.cPoints}</h3>
                <div className={'comp-card'} style={{backgroundImage: `url(${cardState.compCard.image})`, backgroundSize: '150px'}}></div>
            </div>
            <hr/>
            <div>
                <div className={'user-card'} style={{backgroundImage: `url(${cardState.userCard.image})`, backgroundSize: '150px'}}></div>
                <h1 className={'user-name'}>{name}</h1>
                <h3 className={'user-points'}>Points: {board.uPoints}</h3>
            </div>
            <button className={'btn btn-success btn-next'} onClick={drawCards}>Next</button>
        </div>
    );
};

export default Game;
