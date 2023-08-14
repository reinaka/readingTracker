import { FC } from "react";
import styles from './button.module.css';

type TProps = {
    title : string
}

export const Button:FC<TProps> = (props) => {
    return (
        <button className={styles.button}>
            {props.title}
        </button>
    )
}