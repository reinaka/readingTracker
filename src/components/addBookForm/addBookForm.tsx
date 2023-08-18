import { Button, Input, Menu, MenuItem } from "@mui/material";
import { useRef, useState, useCallback } from "react";
import { bindTrigger, bindMenu } from 'material-ui-popup-state/hooks';
import PopupState from 'material-ui-popup-state';
import { useAppDispatch } from "../../services/hooks/reduxTypes";
import { v4 as uuidv4 } from 'uuid';
import { addToRead, addRead, addInProcess } from "../../services/slices/booksListSlice";
import {READ, IN_PROCESS, TO_READ} from '../../services/constants';

export const AddBookForm = () => {
    const ref = useRef<HTMLInputElement | null>(null);
    const [book, setBook] = useState("");
    const dispatch = useAppDispatch();
    
    const inputHandler = () => {
        if (ref.current !== null) setBook(ref.current.value);
    };

    const addBookHandler = useCallback((type : string) => {
        const uuId = uuidv4();
        if(type === TO_READ) {
            dispatch({type: addToRead, payload: {title: book, id: uuId}});
        } else if(type === IN_PROCESS) {
            dispatch({type: addInProcess, payload: {title: book, id: uuId}});
        } else {
            dispatch({type: addRead, payload: {title: book, id: uuId}});
        }
        setBook("");
    },[book, dispatch]);

    return (
        <form action="" method="get" onSubmit={(e) => {e.preventDefault()}}>
            <Input id="outlined-basic" inputRef={ref} value={book} onChange={inputHandler}/>
            <PopupState variant="popover">
            {(popupState) => (
                <>
                    <Button variant="contained" disabled={book.length === 0 ? true : false} {...bindTrigger(popupState)}>Добавить</Button>
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