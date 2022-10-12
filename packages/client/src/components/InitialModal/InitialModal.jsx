/* eslint-disable react-hooks/exhaustive-deps */

import { connect } from "react-redux"
import classes from './InitialModal.module.css';
import React from "react";
import { setInitialModalStatus } from "../../store/initial-modal-reducer";
import { setRegisterModalStatus } from "../../store/register-modal-reducer";


const InitialModal = (props) => {

    const onInitialModalClick = () => {
        props.setInitialModalStatus(false)
        props.setRegisterModalStatus(true)
    }

    if (props.initialModalStatus){
        return (
            <div onClick={onInitialModalClick} className={classes.initial}> 
                <p className={classes.logo}>AlbiqusGame</p>
                <p className={classes.prompt}>кликните на экран</p>
            </div>
        )
    }
}



const mapStateToProps = (state) => {
    return {
        initialModalStatus: state.initial.modalStatus
    }
}

const InitialModalContainer = connect(mapStateToProps, { setInitialModalStatus, setRegisterModalStatus })(InitialModal)

export { InitialModalContainer }