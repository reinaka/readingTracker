import { Menu, MenuItem } from "@mui/material";
import { useRef, useState, useCallback } from "react";
import PopupState from 'material-ui-popup-state';
import { useAppDispatch } from "../../services/hooks/reduxTypes";
import { v4 as uuidv4 } from 'uuid';
import { addBook } from "../../services/slices/booksListSlice";
import {READ, IN_PROCESS, TO_READ} from '../../services/constants';
import { PopupButton } from "../customButton/popupButton";
import { bindMenu } from "material-ui-popup-state";
import generalStyles from '../../App.module.css';

export const AddBookForm = () => {
    const ref = useRef<HTMLInputElement | null>(null);
    const [book, setBook] = useState("");
    const dispatch = useAppDispatch();
    
    const inputHandler = () => {
        if (ref.current !== null) setBook(ref.current.value);
    };

    const addBookHandler = useCallback((type : string) => {
            dispatch({type: addBook, payload: {title: book, id: uuidv4(), type: type}});
            setBook("");
    },[book, dispatch]);

    return (
        <form action="" method="get" onSubmit={(e) => {e.preventDefault()}}>
            <input id="outlined-basic" ref={ref} value={book} onChange={inputHandler} className={generalStyles.customInput}/>
            <PopupState variant="popover">
            {(popupState) => (
                <>
                    <PopupButton isDisabled={!book.length ? true : false} popupState={popupState}>Добавить</PopupButton>
                    <Menu {...bindMenu(popupState)}>
                        <MenuItem onClick={() => {popupState.close(); addBookHandler(TO_READ)}}>Прочесть</MenuItem>
                        <MenuItem onClick={() => {popupState.close(); addBookHandler(IN_PROCESS)}}>В процессе</MenuItem>
                        <MenuItem onClick={() => {popupState.close(); addBookHandler(READ)}}>Прочтены</MenuItem>
                    </Menu>
                </>
            )}
            </PopupState>
        </form>
    )
}