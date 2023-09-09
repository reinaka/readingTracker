import { FavoriteBookCard } from "../../components/favoriteBookCard/favoriteBookCard";
import { useAppDispatch, useAppSelector } from "../../services/hooks/reduxTypes";
import { selectAllBooks } from "../../services/selectorFunctions";
import { toggleLike } from "../../services/slices/booksListSlice";
import styles from './favoriteBooksPage.module.css';

export const FavoriteBooksPage = () => {
    const dispatch = useAppDispatch();
    const favoriteBooks = useAppSelector(selectAllBooks).filter(item => item.like);
    const deleteFromFavorites = (id : string) => {
        dispatch({type: toggleLike, payload: id});
    };

    return (
        <div className={styles.generalLayout}>
            <h1 className={styles.heading}>Favorite Books</h1>
            <div className={styles.mainBlockLayout}>
                {
                    favoriteBooks.length > 0
                    ? (
                        <ul>
                            {favoriteBooks.map(item => (
                                <li key={item.id}>
                                    <FavoriteBookCard title={item.title} handleDelete={deleteFromFavorites} id={item.id}/>
                                </li>
                            ))}
                        </ul>
                    )
                    : (
                        <div>no favorites</div>
                    )
                }
            </div>
        </div>
    )
}