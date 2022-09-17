/* eslint-disable react-hooks/exhaustive-deps */

import { connect } from "react-redux"
import classes from './GameArea.module.css';
import React, { useCallback, useEffect, useState } from "react";
import { checkBonus, checkPlayerLocation, moveBonus, moveLine, resetSettings, setCurrentLine, setBonus, setPosition, removeWasteBonus} from "../../store/game-reducer";
import { setDeathModalStatus } from "../../store/death-modal-reducer";
import { gameMusics } from "../../data/data";
import { getRandomNumber } from "../../utils/getRandomNumber";


const DIRECTIONS = ['ArrowUp', 'ArrowRight', 'ArrowDown', 'ArrowLeft', 'w', 'd', 's', 'a']

const GameArea = (props) => {
    
    let [intervalIdToReset, setIntervalIdToReset] = useState(null)

    const myCallback = useCallback(() => {
        props.moveLine()
        props.setCurrentLine()
        props.moveBonus()
        props.removeWasteBonus()
        props.checkPlayerLocation()
        props.checkBonus()
    }, [props])



    // вызывается колбэк (первый аргумент из useEffect) при монтировании (так как пустой массив зависимостей)
    useEffect(() => {
        const intervalId = setInterval(myCallback, 350);
        setIntervalIdToReset(intervalId)
        // эта функция вызывается при componentUnMount
        return () => {
            clearInterval(intervalId)
        }
    }, [props.gameStatus]);


    useEffect(() => {
        if (!props.menuModalStatus && !props.gameStatus) {
            props.setDeathModalStatus(true)
        }
    }, [props.gameStatus])

    useEffect(() => {
        if (!props.gameStatus) {
            clearInterval(intervalIdToReset)
        }
    }, [intervalIdToReset, props.gameStatus]);

    const gameAreaElements = props.gameArea.map(row => (
        <div key={row[0].id}>
            {row.map(element => {
                let className = classes.element;
                if (props.playerPositionId === element.id) {
                    switch (props.characterSelected) {
                        case 'red':
                            className += ` ${classes.characterRed}`
                            break
                        case 'green':
                            className += ` ${classes.characterGreen}`
                            break
                        case 'blue':
                            className += ` ${classes.characterBlue}`
                            break
                        default:
                    }
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
                
                if (props.bonuses[0].id === element.id) {
                    className += ` ${classes.slowdownEffect}`
                }
                if (props.bonuses[1].id === element.id) {
                    className += ` ${classes.strengthEffect}`
                }
                if (props.bonuses[2].id === element.id) {
                    className += ` ${classes.wideAisleEffect}`
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
    }, [area, props.gameStatus]);

    const audio = React.useRef()

    useEffect(() => {
        if (audio.current) {
            audio.current.volume = props.musicVolume / 100
        }
    }, [props.gameStatus, props.musicVolume])

    let [randomNumber, setRandomNumber] = useState(getRandomNumber(0, 9))

    useEffect(() => {
        setRandomNumber(getRandomNumber(0, 9))
    }, [props.gameStatus])

    useEffect(() => {
        switch (props.currentBonus) {
            case 'slowdown':
                props.setBonus('slowdown')
                break
            case 'strength':
                props.setBonus('strength')
                break
            case 'wideAisle':
                props.setBonus('wideAisle')
                break
            default:
        }
    }, [props.currentBonus])

    
    if (props.gameStatus) {
        return (
            <div autoFocus={true} tabIndex="0" ref={area} onKeyDown={onGameKeyDown} className={classes.area}>
                {gameAreaElements}
                <audio ref={audio} src={gameMusics[randomNumber]} autoPlay loop muted={false} hidden></audio>
            </div>
        )
    }
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
        deathModalStatus: state.death.modalStatus,
        menuModalStatus: state.menu.modalStatus,
        score: state.data.score,
        characterSelected: state.menu.characterSelected,
        gameStatus: state.data.gameStatus,
        musicVolume: state.menu.musicVolume,
        currentBonus: state.data.currentBonus,
        bonusArea: state.data.bonusArea,
        bonuses: state.data.bonuses
    }
}

const GameAreaContainer = connect(mapStateToProps,
    {   setPosition,
        moveLine,
        setCurrentLine,
        checkPlayerLocation,
        setDeathModalStatus,
        resetSettings,
        checkBonus,
        setBonus,
        moveBonus,
        removeWasteBonus
    })(GameArea)

export { GameAreaContainer }