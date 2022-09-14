/* eslint-disable react-hooks/exhaustive-deps */

import { connect } from "react-redux"
import classes from './Score.module.css';

const Score = (props) => {

    if (props.lifeStatus) {
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
        lifeStatus: state.data.lifeStatus
    }
}

const ScoreContainer = connect(mapStateToProps, {})(Score)

export { ScoreContainer }