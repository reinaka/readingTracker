import { PopupState, bindTrigger } from "material-ui-popup-state/hooks";
import { FC } from "react";
import styles from './popupButton.module.css';

type TProps = {
    children : string,
    isDisabled : boolean,
    popupState : PopupState
}

export const PopupButton:FC<TProps> = (props) => {
    return (
        <button className={`${styles.button} ${props.isDisabled ? styles.buttonInactive : styles.buttonActive}`}
                disabled={props.isDisabled}
                {...bindTrigger(props.popupState)}
        >
            {props.children}
        </button>
    )
}