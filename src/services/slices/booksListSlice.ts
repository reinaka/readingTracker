import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type TBooksListState = {
    toRead : {}[],
    inProcess : {}[],
    read : {}[]
};

const initialState: TBooksListState = {
    toRead : [],
    inProcess : [],
    read : []
};;

export const booksListSlice = createSlice({
    name: 'toRead',
    initialState,
    reducers: {
        addToRead : (state, action: PayloadAction<{}>) => {
            state.toRead.push(action.payload);
        },
        addRead : (state, action: PayloadAction<{}>) => {
            state.read.push(action.payload);
        },
        addInProcess : (state, action: PayloadAction<{}>) => {
            state.inProcess.push(action.payload);
        }
    }
});

export const { addToRead, addRead, addInProcess } = booksListSlice.actions;
export default booksListSlice.reducer;