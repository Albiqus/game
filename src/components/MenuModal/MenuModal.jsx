
import { connect } from "react-redux"
import { resetSettings, setGameStatus } from "../../store/game-reducer";
import { setCharacterSelected, setMenuModalStatus, setMusicVolume } from "../../store/menu-modal-reducer";
import classes from './MenuModal.module.css';
import sound from '../../music/menu.mp3'
import { useEffect } from "react";
import React from "react";

const MenuModal = (props) => {

    let characterRed = `${classes.character} ${classes.red}`;
    let characterGreen = `${classes.character} ${classes.green}`
    let characterBlue = `${classes.character} ${classes.blue}`

    switch (props.characterSelected) {
        case 'red':
            characterRed += ` ${classes.selected}`
            break
        case 'green':
            characterGreen += ` ${classes.selected}`
            break
        case 'blue':
            characterBlue += ` ${classes.selected}`
            break
            default:
    }

    const onCharacterRedButtonClick = () => {
        props.setCharacterSelected('red')
    }

    const onCharacterGreenButtonClick = () => {
        props.setCharacterSelected('green')
    }

    const onCharacterBlueButtonClick = () => {
        props.setCharacterSelected('blue')
    }

    const onStartButtonClick = () => {
        props.resetSettings()
        props.setMenuModalStatus(false)
        props.setGameStatus(true)

    }
    

    const audio = React.useRef()

    useEffect(() => {
        if (audio.current) {
            audio.current.volume = props.musicVolume / 100
        }
    }, [props.menuModalStatus, props.musicVolume])

    const onMusicVolumeChange = (e) => {
        let volume = e.target.value
        props.setMusicVolume(volume)
    }

    if (props.menuModalStatus) {
        return (
            <div className={classes.menuModal}>
                <p className={classes.characterText}>персонаж</p>
                <button onClick={onCharacterRedButtonClick} className={characterRed}></button>
                <button onClick={onCharacterGreenButtonClick} className={characterGreen}></button>
                <button onClick={onCharacterBlueButtonClick} className={characterBlue}></button>
                <button onClick={onStartButtonClick} className={classes.startButton}>старт</button>
                <audio ref={audio} src={sound} autoPlay loop muted={false} hidden></audio>
                <div className={classes.volume}>
                    <p className={classes.musicVolumeText}>громкость музыки</p>
                    <input onChange={onMusicVolumeChange} className={classes.musicVolume} type="range" min="0" max="100" value={props.musicVolume} ></input>
                </div>
            </div>
        )
    }


}

const mapStateToProps = (state) => {
    return {
        menuModalStatus: state.menu.modalStatus,
        characterSelected: state.menu.characterSelected,
        gameStatus: state.data.gameStatus,
        musicVolume: state.menu.musicVolume
    }
}

const MenuModalContainer = connect(mapStateToProps, { setCharacterSelected, setGameStatus, setMenuModalStatus, resetSettings, setMusicVolume })(MenuModal)

export { MenuModalContainer }