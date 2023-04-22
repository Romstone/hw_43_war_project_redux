import React from 'react';
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";

const Result = () =>
{
    const navigate = useNavigate();
    const board = useSelector(state => state.board);

    const onClickHandler = () =>
    {
        navigate("/game");
    }

    return (
        <div className={'container last-field'}>
            <h1>{board.cPoints > board.uPoints ? 'LOSE' : board.cPoints < board.uPoints ? 'WIN' : 'SPARE'}</h1>
            <h2>{board.uPoints} - {board.cPoints}</h2>
            <button className={'btn btn-success'} onClick={onClickHandler}>Again?</button>
        </div>
    );
};

export default Result;
