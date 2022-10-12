/* eslint-disable react-hooks/exhaustive-deps */

import { connect } from "react-redux"
import classes from './GameArea.module.css';
import React, { useCallback, useEffect, useState } from "react";
import {
    checkBonusLuck,
    makePlayerInteraction,
    moveBonus, moveLine,
    resetSettings,
    setCurrentLine,
    setBonus,
    setPosition,
    removeWasteBonus,
    setSlowdownEffect,
    reduceTimeSlowdownEffect,
    setStrengthEffect,
    reduceTimeStrengthEffect,
    setWideAisleEffect,
    reduceTimeWideAisleEffect,
    speedUp,
} from "../../store/game-reducer";
import { setDeathModalStatus } from "../../store/death-modal-reducer";
import { gameMusics, slowdown, strength, wideAisle } from "../../data/data";
import { getRandomNumber } from "../../utils/getRandomNumber";
import { registerPlayerScore, registerPlayerScoreInGeneralScores } from "../../thunks/thunks";


const DIRECTIONS = ['ArrowUp', 'ArrowRight', 'ArrowDown', 'ArrowLeft', 'w', 'd', 's', 'a', 'ц', 'в', 'ы', 'ф']

const GameArea = (props) => {

    let [intervalIdToReset, setIntervalIdToReset] = useState(null)

    const move = useCallback(() => {
        props.moveLine()
        props.setCurrentLine()
        props.moveBonus()
        props.removeWasteBonus()
        props.makePlayerInteraction()
        props.checkBonusLuck()
        props.speedUp()
    }, [props])



    // вызывается колбэк (первый аргумент из useEffect) при монтировании (так как пустой массив зависимостей)
    useEffect(() => {
        let interval;
        if (props.slowdonInterval === null) {
            interval = props.interval
        } else {
            interval = props.slowdonInterval
        }

        const intervalId = setInterval(move, interval);
        setIntervalIdToReset(intervalId)
        // эта функция вызывается при componentUnMount
        return () => {
            clearInterval(intervalId)
        }
    }, [props.gameStatus, props.interval, props.slowdonInterval]);

    
    useEffect(() => {
        if (!props.menuModalStatus && !props.initialModalStatus && !props.gameStatus) {
            props.setDeathModalStatus(true)
            props.registerPlayerScoreInGeneralScores(props.nickName, props.score)
            props.registerPlayerScore(props.id, props.nickName, props.score)
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
                if (props.slowdownStatus === 'slowdown' || props.slowdownStatus === 'new slowdown') {
                    className += ` ${classes.slowdown}`
                }
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
        if (DIRECTIONS.includes(e.key.toLowerCase())) {
            props.setPosition(e.key.toLowerCase())
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
        switch (props.newBonus) {
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
        let interval
        if (props.slowdownStatus === null) {
            interval = props.interval
        } else {
            interval = props.slowdonInterval
        }
        let intervalId = setTimeout(setBonus, interval * getRandomNumber(1, 4))
        return () => {
            clearInterval(intervalId)
        }
    }, [props.newBonus, props.slowdownStatus])



    useEffect(() => {
        if (props.slowdownStatus === 'slowdown' || props.slowdownStatus === 'new slowdown') {
            props.setSlowdownEffect()
        }
    }, [props.slowdownStatus])

    useEffect(() => {
        if (props.strengthStatus === 'strength' || props.strengthStatus === 'new strength') {
            props.setStrengthEffect()
        }
    }, [props.strengthStatus])

    useEffect(() => {
        if (props.wideAisleStatus === 'wideAisle' || props.wideAisleStatus === 'new wideAisle') {
            props.setWideAisleEffect()
        }
    }, [props.wideAisleStatus])


    useEffect(() => {
        const intervalId = setTimeout(() => {
            props.reduceTimeSlowdownEffect()
        }, 1000);
        return () => {
            clearInterval(intervalId)
        }
    }, [props.slowdownEffectSeconds])

    useEffect(() => {
        const intervalId = setTimeout(() => {
            props.reduceTimeStrengthEffect()
        }, 1000);
        return () => {
            clearInterval(intervalId)
        }
    }, [props.strengthEffectSeconds])

    useEffect(() => {
        const intervalId = setTimeout(() => {
            props.reduceTimeWideAisleEffect()
        }, 1000);
        return () => {
            clearInterval(intervalId)
        }
    }, [props.wideAisleEffectSeconds])

    const effectsSound = React.useRef()


    useEffect(() => {
        if (effectsSound.current) {
            effectsSound.current.volume = props.effectsVolume / 100
        }
    }, [props.gameStatus, props.effectsVolume, props.slowdownStatus, props.strengthStatus, props.wideAisleStatus])

    const onMusicEnded = () => {
        setRandomNumber(getRandomNumber(0, 9))
    }

    if (props.gameStatus) {
        return (
            <div autoFocus={true} tabIndex="0" ref={area} onKeyDown={onGameKeyDown} className={classes.area}>
                {gameAreaElements}
                <audio ref={audio} src={gameMusics[randomNumber]} onEnded={onMusicEnded} autoPlay muted={false} hidden></audio>
                {props.slowdownStatus === 'slowdown' &&
                    <audio ref={effectsSound} src={slowdown} autoPlay muted={false} hidden></audio>
                }
                {props.slowdownStatus === 'new slowdown' &&
                    <audio ref={effectsSound} src={slowdown} autoPlay muted={false} hidden></audio>
                }
                {props.strengthStatus === 'strength' &&
                    <audio ref={effectsSound} src={strength} autoPlay muted={false} hidden></audio>
                }
                {props.strengthStatus === 'new strength' &&
                    <audio ref={effectsSound} src={strength} autoPlay muted={false} hidden></audio>
                }
                {props.wideAisleStatus === 'wideAisle' &&
                    <audio ref={effectsSound} src={wideAisle} autoPlay muted={false} hidden></audio>
                }
                {props.wideAisleStatus === 'new wideAisle' &&
                    <audio ref={effectsSound} src={wideAisle} autoPlay muted={false} hidden></audio>
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        gameArea: state.data.gameArea,
        nickName: state.data.nickName,
        id: state.data.id,
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
        effectsVolume: state.menu.effectsVolume,
        newBonus: state.data.newBonus,
        bonusArea: state.data.bonusArea,
        bonuses: state.data.bonuses,
        slowdownStatus: state.data.slowdownStatus,
        strengthStatus: state.data.strengthStatus,
        wideAisleStatus: state.data.wideAisleStatus,
        interval: state.data.interval,
        slowdonInterval: state.data.slowdonInterval,
        slowdownEffectSeconds: state.data.slowdownEffectSeconds,
        strengthEffectSeconds: state.data.strengthEffectSeconds,
        wideAisleEffectSeconds: state.data.wideAisleEffectSeconds,
        initialModalStatus: state.initial.modalStatus
    }
}

const GameAreaContainer = connect(mapStateToProps,
    {
        setPosition,
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
        reduceTimeSlowdownEffect,
        setStrengthEffect,
        reduceTimeStrengthEffect,
        setWideAisleEffect,
        reduceTimeWideAisleEffect,
        speedUp,
        registerPlayerScore,
        registerPlayerScoreInGeneralScores
    })(GameArea)

export { GameAreaContainer }