import { createSlice } from '@reduxjs/toolkit';

export type TTestState = {};

const initialState: TTestState = {};

export const testSlice = createSlice({
    name: 'testSlice',
    initialState,
    reducers: {}
});

// export const { } = testSlice.actions

export default testSlice.reducer;