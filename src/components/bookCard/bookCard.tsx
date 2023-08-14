import { FC } from "react";
import styles from './bookCard.module.css';

type TProps = {
    title : string,
    author : string,
    year: number
}

export const BookCard:FC<TProps> = (props) => {
    return (
        <div className={styles.wrapper}>
            <div>
                <p>{props.title}</p>
                <p>{props.author}</p>
                <p>{props.year}</p>
            </div>
        </div>
    )
}