import { FC, useCallback } from "react";
import { selectAllBooks } from "../../services/selectorFunctions";
import { useAppSelector, useAppDispatch } from "../../services/hooks/reduxTypes";
import { BookCard } from "../bookCard/bookCard";
import styles from './block.module.css';
import { TBook } from "../../services/types";
import { toggleLike, deleteBook } from "../../services/slices/booksListSlice";

type TProps = {
    category: string,
    title: string,
}

export const Block:FC<TProps> = (props) => {
    const allBooks : TBook[] = useAppSelector(selectAllBooks);
    const categoryArr = allBooks.filter(item => item.type === props.category);
    const dispatch = useAppDispatch();

    const handleLike = useCallback((id : string) => {
        dispatch({type: toggleLike, payload: id});
    }, [dispatch]);

    const handleDelete = useCallback((id : string) => {
        dispatch({type: deleteBook, payload: id});
    }, [dispatch]);

    return (
        <div className={styles.wrapper}>
            <h2 className={styles.title}>{props.title}</h2>
            <ul className={styles.list}>
                {categoryArr.length > 0 &&
                categoryArr.map((item : TBook) => (
                    <li key={item.id}>
                        <BookCard item={item} onLike={handleLike} onDelete={handleDelete}/>
                    </li>
                ))
                }
            </ul>
        </div>
    )
}