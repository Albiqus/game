/* eslint-disable react-hooks/exhaustive-deps */

import { connect } from "react-redux"
import classes from './GameArea.module.css';
import React, { useCallback, useEffect, useState } from "react";
import { checkBonusLuck, makePlayerInteraction, moveBonus, moveLine, resetSettings, setCurrentLine, setBonus, setPosition, removeWasteBonus, setSlowdownEffect, reduceTimeSlowdownEffect} from "../../store/game-reducer";
import { setDeathModalStatus } from "../../store/death-modal-reducer";
import { intervals, gameMusics } from "../../data/data";
import { getRandomNumber } from "../../utils/getRandomNumber";


const DIRECTIONS = ['ArrowUp', 'ArrowRight', 'ArrowDown', 'ArrowLeft', 'w', 'd', 's', 'a']

const GameArea = (props) => {
    
    let [intervalIdToReset, setIntervalIdToReset] = useState(null)

    const move = useCallback(() => {
        props.moveLine()
        props.setCurrentLine()
        props.moveBonus()
        props.removeWasteBonus()
        props.makePlayerInteraction()
        props.checkBonusLuck()
    }, [props])



    // вызывается колбэк (первый аргумент из useEffect) при монтировании (так как пустой массив зависимостей)
    useEffect(() => {
        const intervalId = setInterval(move, props.interval);
        setIntervalIdToReset(intervalId)
        // эта функция вызывается при componentUnMount
        return () => {
            clearInterval(intervalId)
        }
    }, [props.gameStatus, props.interval]);


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
                if (props.effect === 'slowdown' || props.effect === 'new slowdown') {
                    className += ` ${classes.slowdown}`
                }
                if (props.playerPositionId === element.id) {
                    switch (props.characterSelected) {
                        case 'red':
                            if (props.effect === 'slowdown' || props.effect === 'new slowdown') {
                                className += ` ${classes.characterRedSlowdown}`
                            } else {
                                className += ` ${classes.characterRed}`
                            }
                            break
                        case 'green':
                            if (props.effect === 'slowdown' || props.effect === 'new slowdown') {
                                className += ` ${classes.characterGreenSlowdown}`
                            } else {
                                className += ` ${classes.characterGreen}`
                            }
                            break
                        case 'blue':
                            if (props.effect === 'slowdown' || props.effect === 'new slowdown') {
                                className += ` ${classes.characterBlueSlowdown}`
                            } else {
                                className += ` ${classes.characterBlue}`
                            }
                            break
                        default:
                    }
                    className += ` ${classes.player}`
                }
                if (props.lineIds.includes(element.id)) {
                    if (props.effect === 'slowdown' || props.effect === 'new slowdown') {
                        className += ` ${classes.slowdownLine}`
                    } else {
                        className += ` ${classes.line}`
                    }
                }
                if (props.secondLineIds.includes(element.id) && props.secondLineStatus) {
                    if (props.effect === 'slowdown' || props.effect === 'new slowdown') {
                        className += ` ${classes.slowdownLine}`
                    } else {
                        className += ` ${classes.line}`
                    }
                }
                if (props.thirdLineIds.includes(element.id) && props.thirdLineStatus) {
                    if (props.effect === 'slowdown' || props.effect === 'new slowdown') {
                        className += ` ${classes.slowdownLine}`
                    } else {
                        className += ` ${classes.line}`
                    }
                }
                
                if (props.bonuses[0].id === element.id) {
                    if (props.effect === 'slowdown' || props.effect === 'new slowdown') {
                        className += ` ${classes.slowdownSlowdownEffect}`
                    } else {
                        className += ` ${classes.slowdownEffect}`
                    }
                }
                if (props.bonuses[1].id === element.id) {
                    if (props.effect === 'slowdown' || props.effect === 'new slowdown') {
                        className += ` ${classes.slowdownStrengthEffect}`
                    } else {
                        className += ` ${classes.strengthEffect}`
                    }
                }
                if (props.bonuses[2].id === element.id) {
                    if (props.effect === 'slowdown' || props.effect === 'new slowdown') {
                        className += ` ${classes.slowdownWideAisleEffect}`
                    } else {
                        className += ` ${classes.wideAisleEffect}`
                    }
                    
                }

                return <div className={className} key={element.id}></div>
            })}
        </div>
    ))
    const onGameKeyDown = (e) => {

        if (DIRECTIONS.includes(e.key)) {
            props.setPosition(e.key)
            props.makePlayerInteraction()
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




    const setBonus = () => {
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
    }
    
    useEffect(() => {
        let factor = 1
        if (props.effect === 'slowdown') {
            factor++
        }
        setTimeout(setBonus, factor * intervals[getRandomNumber(0, 3)])
    }, [props.currentBonus])
    
    

    useEffect(() => {
        switch (props.effect) {
            case 'slowdown':
            case 'new slowdown':
                props.setSlowdownEffect()
                break
            case 'strength':
                props.setBonus('strength')
                break
            case 'wideAisle':
                props.setBonus('wideAisle')
                break
            default:
        }
    }, [props.effect])




    useEffect(() => {
        const intervalId = setTimeout(() => {
            props.reduceTimeSlowdownEffect()
        }, 1000);
        return () => {
            clearInterval(intervalId)
        }
    }, [props.slowdownEffectSeconds])



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
        bonuses: state.data.bonuses,
        effect: state.data.effect,
        interval: state.data.interval,

        slowdownEffectSeconds: state.data.slowdownEffectSeconds
    }
}

const GameAreaContainer = connect(mapStateToProps,
    {   setPosition,
        moveLine,
        setCurrentLine,
        makePlayerInteraction,
        setDeathModalStatus,
        resetSettings,
        checkBonusLuck,
        setBonus,
        moveBonus,
        removeWasteBonus,
        setSlowdownEffect,
        reduceTimeSlowdownEffect
    })(GameArea)

export { GameAreaContainer }