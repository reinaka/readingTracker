import { FC } from "react";
import styles from './bookCard.module.css';
import generalStyles from'../../App.module.css';
import { TBook } from "../../services/types";

type TProps = {
    item : TBook,
    onLike : Function,
    onDelete : Function
}

export const BookCard:FC<TProps> = (props) => {
    return (
        <div className={styles.wrapper}>
            <p className={styles.title}>{props.item.title}</p>
            <div className={styles.iconsBlock}>
                <svg className={`${generalStyles.icons} ${props.item.like ? styles.activeLike : undefined}`} width="24" height="24" viewBox="0 0 24 24"
                    onClick={() => {props.onLike(props.item.id)}}
                >
                    <path d="M12 4.435c-1.989-5.399-12-4.597-12 3.568 0 4.068 3.06 9.481 12 14.997 8.94-5.516 12-10.929 12-14.997 0-8.118-10-8.999-12-3.568z" />
                </svg>
                <svg className={generalStyles.icons} height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"
                    onClick={() => {props.onDelete(props.item.id)}}
                >
                    <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>
                </svg>
                <svg className={generalStyles.icons} width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
                </svg>
            </div>
        </div>
    )
}