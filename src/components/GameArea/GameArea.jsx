/* eslint-disable react-hooks/exhaustive-deps */

import { connect } from "react-redux"
import classes from './GameArea.module.css';
import React, { useCallback, useEffect, useState } from "react";
import { checkPlayerLocation, moveLine, resetSettings, resurrectPlayer, setCurrentLine, setPosition } from "../../store/game-reducer";
import { setDeathModalStatus } from "../../store/death-modal-reducer";

const DIRECTIONS = ['ArrowUp', 'ArrowRight', 'ArrowDown', 'ArrowLeft', 'w', 'd', 's', 'a']

const GameArea = (props) => {
    
    let [intervalIdToReset, setIntervalIdToReset] = useState(null)

    const myCallback = useCallback(() => {
        props.moveLine()
        props.setCurrentLine()
        props.checkPlayerLocation()
    }, [props])


    // вызывается колбэк (первый аргумент из useEffect) при монтировании (так как пустой массив зависимостей)
    useEffect(() => {
        const intervalId = setInterval(myCallback, 300);
        setIntervalIdToReset(intervalId)
        // эта функция вызывается при componentUnMount
        return () => {
            clearInterval(intervalId)
        }
    }, [props.lifeStatus]);

    useEffect(() => {
        if (!props.lifeStatus) {
            props.setDeathModalStatus(true)
            clearInterval(intervalIdToReset)
        } else {
            props.setDeathModalStatus(false)
            props.resetSettings()
        }
    }, [intervalIdToReset, props.lifeStatus]);

    const gameAreaElements = props.gameArea.map(row => (
        <div key={row[0].id}>
            {row.map(element => {
                let className = classes.element;
                if (props.playerPositionId === element.id) {
                    className += ` ${classes.player}`
                }
                if (props.lineIds.includes(element.id)) {
                    className += ` ${classes.line}`
                }
                if (props.secondLineIds.includes(element.id) && props.secondLineStatus) {
                    className += ` ${classes.line}`
                }
                if (props.thirdLineIds.includes(element.id) && props.thirdLineStatus) {
                    className += ` ${classes.line}`
                }
                return <div className={className} key={element.id}></div>
            })}
        </div>
    ))
    const onGameKeyDown = (e) => {
        if (DIRECTIONS.includes(e.key)) {
            props.setPosition(e.key)
            props.checkPlayerLocation()
        }

    }

    const area = React.useRef()
    useEffect(() => {
        area.current?.focus()
    }, [area, props.deathModalStatus]);
  
    const onRestartButtonClick = () => {
        props.resurrectPlayer()
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

    return (
        <div autoFocus={true} tabIndex="0" ref={area} onKeyDown={onGameKeyDown} className={classes.area}>
            {gameAreaElements}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        gameArea: state.data.gameArea,
        playerPositionId: state.data.playerPositionId,
        lineIds: state.data.lineIds,
        currentLine: state.data.currentLine,
        secondLineIds: state.data.secondLineIds,
        secondLineStatus: state.data.secondLineStatus,
        thirdLineIds: state.data.thirdLineIds,
        thirdLineStatus: state.data.thirdLineStatus,
        lifeStatus: state.data.lifeStatus,
        deathModalStatus: state.death.modalStatus,
        score: state.data.score
    }
}

const GameAreaContainer = connect(mapStateToProps, { setPosition, moveLine, setCurrentLine, checkPlayerLocation, setDeathModalStatus, resurrectPlayer, resetSettings })(GameArea)

export { GameAreaContainer }