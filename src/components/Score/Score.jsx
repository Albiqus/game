/* eslint-disable react-hooks/exhaustive-deps */

import { connect } from "react-redux"
import classes from './Score.module.css';

const Score = (props) => {
    if (props.gameStatus) {
        return (
            <div className={classes.panel}>
                <p className={classes.gameScore}>{props.score}</p>
                {props.slowdownEffectSeconds !== null &&
                    <div className={classes.slowdownEffectSeconds}>
                        <p className={classes.slowdownEffectSecondsText}>{props.slowdownEffectSeconds}</p>
                    </div>
                }
            </div>
        )
    }


}

const mapStateToProps = (state) => {
    return {
        score: state.data.score,
        deathModalStatus: state.death.modalStatus,
        menuModalStatus: state.menu.modalStatus,
        gameStatus: state.data.gameStatus,
        slowdownEffectSeconds: state.data.slowdownEffectSeconds,
    }
}

const ScoreContainer = connect(mapStateToProps, {})(Score)

export { ScoreContainer }