
import { connect } from "react-redux"
import { resetSettings, setGameStatus } from "../../store/game-reducer";
import { setCharacterSelected, setEffectsVolume, setMenuModalStatus, setMusicVolume } from "../../store/menu-modal-reducer";
import classes from './MenuModal.module.css';
import sound from '../../music/menu.mp3'
import { useEffect } from "react";
import React from "react";
import { setInfoPageStatus } from "../../store/info-page-reducer";

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
    const onInfoButtonClick = () => {
        props.setInfoPageStatus(true)
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
    const onEffectsVolumeChange = (e) => {
        let volume = e.target.value
        props.setEffectsVolume(volume)
    }

    const onBackButtonClick = () => {
        props.setInfoPageStatus(false)
    }

    if (props.menuModalStatus) {
        return (

            <div className={classes.menuModal}>
                {!props.infoPageStatus &&
                    <div className={classes.mainMenu}>
                        <p className={classes.characterText}>персонаж</p>
                        <div className={classes.charactersBox}>
                            <button onClick={onCharacterRedButtonClick} className={characterRed}></button>
                            <button onClick={onCharacterGreenButtonClick} className={characterGreen}></button>
                            <button onClick={onCharacterBlueButtonClick} className={characterBlue}></button>
                        </div>
                        <button onClick={onStartButtonClick} className={classes.startButton}>старт</button>
                        <button onClick={onInfoButtonClick} className={classes.infoButton}>об игре</button>
                        <div className={classes.volume}>
                            <p className={classes.musicVolumeText}>громкость музыки</p>
                            <input onChange={onMusicVolumeChange} className={classes.musicVolume} type="range" min="0" max="100" value={props.musicVolume} ></input>
                            <p className={classes.effectsVolumeText}>громкость эффектов</p>
                            <input onChange={onEffectsVolumeChange} className={classes.effectsVolume} type="range" min="0" max="100" value={props.effectsVolume} ></input>
                        </div>
                    </div>
                }
                {props.infoPageStatus &&
                    <div className={classes.info}>
                        <button onClick={onBackButtonClick} className={classes.backButton}></button>
                        <p className={classes.header}>albiqusGame</p>
                        <p className={classes.headerDescription}>описание</p>
                        <p className={classes.descriptionText}>Игра представляет собой аркаду, в которой нужно набрать наибольшее количество очков,
                            проходя через проёмы в надвигающихся стенах</p>
                        <div className={classes.descriptionAndGifBox}>
                            <p className={classes.descriptionText2}>Движение стен постепенно увеличивается, делая <br></br>прохождение сложнее</p>
                            <div className={classes.demo}></div>
                        </div>
                        <p className={classes.headerControls}>управление</p>
                        <div className={classes.ControlAndGifBox}>
                            <p className={classes.controlText}>ArrowUp<br></br>
                                ArrowRight<br></br>ArrowDown<br></br>ArrowLeft</p>
                            <div className={classes.arrows}></div>
                        </div>
                        <p className={classes.headerBonuses}>бонусы</p>
                        <div className={classes.bonusesAndImageBox}>
                            <p className={classes.bonusesText}>В процессе игры будут появляться бонусы, дающие определённый эффект<br></br><br></br>
                                В общей<br></br> сумме в<br></br> игре<br></br> 3 бонуса</p>
                            <div className={classes.bonuses}>
                                <div className={classes.slowdown}></div>
                                <div className={classes.strength}></div>
                                <div className={classes.wideAisle}></div>
                            </div>
                            <div className={classes.bonusesDescriptionText}>
                                <p className={classes.slowdownText}>замедляет движение стен на 40% на 15 секунд</p>
                                <p className={classes.strengthText}>даёт возможность проходить через стены, пробивая их в течение 10 секунд</p>
                                <p className={classes.wideAisleText}>расширяет проёмы стен в 3 раза в течение 20 секунд</p>
                            </div>
                        </div>
                        <p className={classes.headerAdditionally}>дополнительно</p>
                        <p className={classes.additionallyText}>Игра является учебным практическим проектом<br></br>Разработчик: <a rel="noreferrer" href="https://vk.com/albiqus" target="_blank">Рахманкулов Альберт</a></p>
                        <p className={classes.date}>сентябрь 2022</p>
                    </div>
                }
                <audio ref={audio} src={sound} autoPlay loop muted={false} hidden></audio>
            </div>
        )
    }
}




const mapStateToProps = (state) => {
    return {
        menuModalStatus: state.menu.modalStatus,
        characterSelected: state.menu.characterSelected,
        gameStatus: state.data.gameStatus,
        musicVolume: state.menu.musicVolume,
        effectsVolume: state.menu.effectsVolume,
        infoPageStatus: state.info.infoPageStatus
    }
}

const MenuModalContainer = connect(mapStateToProps, { setCharacterSelected, setGameStatus, setMenuModalStatus, resetSettings, setMusicVolume, setEffectsVolume, setInfoPageStatus })(MenuModal)

export { MenuModalContainer }