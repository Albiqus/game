
import { connect } from "react-redux"
import { setGameStatus } from "../../store/game-reducer";
import { setCharacterSelected, setMenuModalStatus } from "../../store/menu-modal-reducer";
import classes from './MenuModal.module.css';

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
        props.setGameStatus(true)
        props.setMenuModalStatus(false)
    }

    if (props.menuModalStatus) {
        return (
            <div className={classes.menuModal}>
                <p className={classes.characterText}>персонаж</p>
                <button onClick={onCharacterRedButtonClick} className={characterRed}></button>
                <button onClick={onCharacterGreenButtonClick} className={characterGreen}></button>
                <button onClick={onCharacterBlueButtonClick} className={characterBlue}></button>
                <button onClick={onStartButtonClick} className={classes.startButton}>старт</button>
            </div>
        )
    }


}

const mapStateToProps = (state) => {
    return {
        menuModalStatus: state.menu.modalStatus,
        characterSelected: state.menu.characterSelected,
        gameStatus: state.data.gameStatus
    }
}

const MenuModalContainer = connect(mapStateToProps, { setCharacterSelected, setGameStatus, setMenuModalStatus })(MenuModal)

export { MenuModalContainer }