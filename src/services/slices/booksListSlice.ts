import { createSlice, PayloadAction, current } from '@reduxjs/toolkit';
import { TBook } from '../types';

export type TBooksListState = TBook[];

const initialState: TBooksListState = [];

export const booksListSlice = createSlice({
    name: 'toRead',
    initialState,
    reducers: {
        addBook : (state, action: PayloadAction<TBook>) => {
            state.push({...action.payload, like: false});
        },
        toggleLike : (state, action: PayloadAction<string>) => {
            const selectedBook = state.filter(book => book.id === action.payload)[0];
            selectedBook.like = selectedBook.like ? false : true;
            state = [...current(state), current(selectedBook)];
        },
        deleteBook : (state, action: PayloadAction<string>) => {
            const newArr = state.filter(book => book.id !== action.payload);
            return newArr;
        }
    }
});

export const { addBook, toggleLike, deleteBook } = booksListSlice.actions;
export default booksListSlice.reducer;