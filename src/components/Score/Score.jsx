/* eslint-disable react-hooks/exhaustive-deps */

import { connect } from "react-redux"
import classes from './Score.module.css';

const Score = (props) => {

    if (props.gameStatus) {
        return (
            <div>
                <p className={classes.gameScore}>{props.score}</p>
            </div>
        )
    }


}

const mapStateToProps = (state) => {
    return {
        score: state.data.score,
        deathModalStatus: state.death.modalStatus,
        menuModalStatus: state.menu.modalStatus,
        gameStatus: state.data.gameStatus
    }
}

const ScoreContainer = connect(mapStateToProps, {})(Score)

export { ScoreContainer }