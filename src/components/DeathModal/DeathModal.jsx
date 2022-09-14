/* eslint-disable react-hooks/exhaustive-deps */

import { connect } from "react-redux"
import { setDeathModalStatus } from "../../store/death-modal-reducer";
import { resetSettings, setGameStatus } from "../../store/game-reducer";
import classes from './DeathModal.module.css';

const DeathModal = (props) => {

    const onRestartButtonClick = () => {
        props.resetSettings()
        props.setDeathModalStatus(false)
        props.setGameStatus(true)
    }

    if (props.deathModalStatus) {
        return (
            <div className={classes.deathModal}>
                <p className={classes.loseText}>вы проиграли</p>
                <p className={classes.score}>счёт:{props.score}</p>
                <button onClick={onRestartButtonClick} className={classes.restartButton}>играть заново</button>
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

const DeathModalContainer = connect(mapStateToProps, { resetSettings, setDeathModalStatus, setGameStatus })(DeathModal)

export { DeathModalContainer }