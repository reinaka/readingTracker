import { FC } from "react";
import { IN_PROCESS, TO_READ } from "../../services/constants";
import { selectInProcess, selectRead, selectToRead } from "../../services/selectorFunctions";
import { useAppSelector } from "../../services/hooks/reduxTypes";
import { BookCard } from "../bookCard/bookCard";
import styles from './block.module.css';

type TProps = {
    category: string,
    title: string
}

export const Block:FC<TProps> = (props) => {
    let selectorFunction;
    if(props.category === TO_READ) {
        selectorFunction = selectToRead;
    } else if(props.category === IN_PROCESS) {
        selectorFunction = selectInProcess;
    } else {
        selectorFunction = selectRead;
    }

    const booksArr = useAppSelector(selectorFunction);

    return (
        <div className={styles.wrapper}>
            <h2 className={styles.title}>{props.title}</h2>
            <ul className={styles.list}>
                {booksArr.length > 0 &&
                booksArr.map(item => (
                    <li key={item.id}>
                        <BookCard title={item.title}/>
                    </li>
                ))
                }
            </ul>
        </div>
    )
}