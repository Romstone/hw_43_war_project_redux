import React from 'react';
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {changeUserName} from "../redux/actions/nameActions";

const Start = () =>
{
    const navigate = useNavigate();
    const dispatch = useDispatch();

    return (
        <div className={'container form'}>
            <h1>Ready for WAR</h1>
            <form action="#" onSubmit={(e) => {
                e.preventDefault();
                let name = e.target.name.value;
                dispatch(changeUserName(name));
                navigate("/game");
            }}>
                <input type="text" placeholder={'Enter your name'} id={'name'}/>
                <br/>
                <button className={'btn btn-success btn-form'}>Start</button>
            </form>
        </div>
    )
};

export default Start;

