import { FC } from "react";
import styles from './favoriteBookCard.module.css';

type TProps = {
    title : string,
    handleDelete : Function,
    id: string
}

export const FavoriteBookCard:FC<TProps> = (props) => {

    return (
        <div className={styles.wrapper}>
            <div>{props.title}</div>
            <div>
                <svg className={styles.icons} height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"
                    onClick={() => props.handleDelete(props.id)}
                >
                    <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>
                </svg>
            </div>
        </div>
    )
}