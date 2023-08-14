import { combineReducers } from "@reduxjs/toolkit";
import testReducer from './slices/testSlice';

export const rootReducer = combineReducers({
    test: testReducer
});