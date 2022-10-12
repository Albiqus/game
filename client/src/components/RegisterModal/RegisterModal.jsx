/* eslint-disable react-hooks/exhaustive-deps */

import { connect } from "react-redux"
import { setMenuModalStatus } from "../../store/menu-modal-reducer";
import classes from './RegisterModal.module.css';
import React, { useState } from "react";
import { setRegisterModalStatus } from "../../store/register-modal-reducer";
import { setNickName } from "../../store/game-reducer";
import { registerPlayer } from "../../thunks/thunks";


const RegisterModal = (props) => {

    let [inputText, setInputText] = useState('')
    let [valideStatus, setValideStatus] = useState(true)

    const onInputChange = (e) => {
        if (e.target.value === '') {
            setInputText('');
        }
        if (e.target.value.length < 11 && /^[0-9A-ZА-ЯЁ]+$/i.test(e.target.value)) {
            setInputText(e.target.value.toUpperCase())
        }

    }

    const onAddNickButtonClick = () => {
        if (inputText.length < 3) {
            setValideStatus(false)
        } else {
            props.registerPlayer(inputText)
            props.setRegisterModalStatus(false)
            props.setMenuModalStatus(true)
        }
    }

    const onInputKeyDown = (e) => {
        if (e.key === "Enter") {
            onAddNickButtonClick()
        }
    }

    let inputClassName = classes.nickname
    if (!valideStatus) { inputClassName += ` ${classes.badValide}` }
    if (props.registerModalStatus) {
        return (
            <div className={classes.initial}>
                <p className={classes.header}>ваш никнейм:</p>
                <input onKeyDown={onInputKeyDown} onChange={onInputChange} className={inputClassName} type="text" value={inputText} />
                {!valideStatus && <p className={classes.error}>никнейм должен иметь минимум 3 символа</p>}
                <button onClick={onAddNickButtonClick} className={classes.addNickButton}>дальше</button>
            </div>
        )
    }
}



const mapStateToProps = (state) => {
    return {
        registerModalStatus: state.register.modalStatus
    }
}

const RegisterModalContainer = connect(mapStateToProps, { setRegisterModalStatus, setMenuModalStatus, setNickName, registerPlayer })(RegisterModal)

export { RegisterModalContainer }