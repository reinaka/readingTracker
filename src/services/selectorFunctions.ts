import { TStore } from "./store";
import { TBook } from "./types";

export function selectToRead(store : TStore) : TBook[] {
    return store.booksList.toRead;
}

export function selectRead(store : TStore) : TBook[]{
    return store.booksList.read;
}

export function selectInProcess(store : TStore) : TBook[]{
    return store.booksList.inProcess;
}