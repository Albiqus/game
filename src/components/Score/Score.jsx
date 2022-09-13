/* eslint-disable react-hooks/exhaustive-deps */

import { connect } from "react-redux"
import classes from './Score.module.css';

const Score = (props) => {

    return (
        <div>
            <p className={classes.gameScore}>{props.score}</p>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        score: state.data.score
    }
}

const ScoreContainer = connect(mapStateToProps, {})(Score)

export { ScoreContainer }