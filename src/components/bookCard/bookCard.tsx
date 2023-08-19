import { FC } from "react";
import styles from './bookCard.module.css';

type TProps = {
    title : string,
}

export const BookCard:FC<TProps> = (props) => {
    return (
        <div className={styles.wrapper}>
            <p>{props.title}</p>
        </div>
    )
}