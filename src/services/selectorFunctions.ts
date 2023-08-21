import { TStore } from "./store";
import { TBook } from "./types";

export function selectAllBooks(store : TStore) : TBook[] {
    return store.booksList;
}