/* eslint-disable react-hooks/exhaustive-deps */

import { connect } from "react-redux"
import { setDeathModalStatus } from "../../store/death-modal-reducer";
import { resetSettings, setGameStatus} from "../../store/game-reducer";

import { setMenuModalStatus } from "../../store/menu-modal-reducer";
import classes from './DeathModal.module.css';
import sound from '../../music/loss.mp3'
import { useEffect } from "react";
import React from "react";


const DeathModal = (props) => {

    const onRestartButtonClick = () => {
        props.resetSettings()
        props.setDeathModalStatus(false)
        props.setGameStatus(true)
    }

    const onMenuButtonClick = () => {
        props.setDeathModalStatus(false)
        props.setMenuModalStatus(true)
    }

    const onDeathModalKeyDown = (e) => {
        if (e.key === "Enter") {
            onRestartButtonClick()
        }
        if (e.key === "Escape") {
            onMenuButtonClick()
        }
    }

    const deathModal = React.useRef()

    useEffect(() => {
        deathModal.current?.focus()
    }, [deathModal, props.deathModalStatus]);


    const audio = React.useRef()
   

    useEffect(() => {
        if (audio.current) {
            audio.current.volume = 0.1
        }
    }, [props.deathModalStatus])

    if (props.deathModalStatus) {
        return (
            <div autoFocus={true} tabIndex="0" ref={deathModal} className={classes.deathModal} onKeyDown={onDeathModalKeyDown}>
                <p className={classes.loseText}>вы проиграли</p>
                <p className={classes.score}>счёт:{props.score}</p>
                <button onClick={onRestartButtonClick} className={classes.restartButton}>заново</button>
                <button onClick={onMenuButtonClick} className={classes.menuButton}>меню</button>
                <audio ref={audio} src={sound} autoPlay muted={false} hidden></audio>
            </div>
        )
    }


}

const mapStateToProps = (state) => {
    return {
        deathModalStatus: state.death.modalStatus,
        score: state.data.score,
        gameStatus: state.data.gameStatus
    }
}

const DeathModalContainer = connect(mapStateToProps, { resetSettings, setDeathModalStatus, setGameStatus, setMenuModalStatus })(DeathModal)

export { DeathModalContainer }