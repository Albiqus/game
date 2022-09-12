/* eslint-disable react-hooks/exhaustive-deps */

import { connect } from "react-redux"
import classes from './GameArea.module.css';
import React, { useCallback, useEffect } from "react";
import { moveLine, setCurrentLine, setPosition } from "../../store/game-reducer";

const GameArea = (props) => {
 

    const myCallback = useCallback(() => {
        props.moveLine()
        props.setCurrentLine()
    }, [props])

    useEffect(() => {
        const intervalId = setInterval(myCallback, 200);
        return () => {
            clearInterval(intervalId)
        }
    }, []);

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
                
            return <div className={className} key={element.id}>{element.id}</div>
            })}
        </div>
    ))

    const onGameKeyDown = (e) => {
        if (e.key === 'ArrowUp' || e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === 'ArrowLeft') {
            props.setPosition(e.key)
        }

    }
    
    const area = React.useRef()
    useEffect(() => {
        area?.current?.focus()
    }, [area]);

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
        lineIds: state.data.lineIds
    }
}

const GameAreaContainer = connect(mapStateToProps, { setPosition, moveLine, setCurrentLine})(GameArea)

export { GameAreaContainer }