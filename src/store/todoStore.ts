import {createEntityAdapter, createSlice} from "@reduxjs/toolkit";

export const adapter = createEntityAdapter({
    selectId: (item: any) => item.id,
})

export default createSlice({
    name: "todo",
    initialState: adapter.getInitialState({
        list: []
    }),
    reducers: {
        add: adapter.addOne,
        remove: adapter.removeOne
    }
})