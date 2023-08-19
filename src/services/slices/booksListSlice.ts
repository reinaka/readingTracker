import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TBook } from '../types';

export type TBooksListState = {
    toRead : TBook[],
    inProcess : TBook[],
    read : TBook[]
};

const initialState: TBooksListState = {
    toRead : [],
    inProcess : [],
    read : []
};

export const booksListSlice = createSlice({
    name: 'toRead',
    initialState,
    reducers: {
        addToRead : (state, action: PayloadAction<TBook>) => {
            state.toRead.push(action.payload);
        },
        addRead : (state, action: PayloadAction<TBook>) => {
            state.read.push(action.payload);
        },
        addInProcess : (state, action: PayloadAction<TBook>) => {
            state.inProcess.push(action.payload);
        }
    }
});

export const { addToRead, addRead, addInProcess } = booksListSlice.actions;
export default booksListSlice.reducer;