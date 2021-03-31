import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector, connect, shallowEqual} from "react-redux";
import todoStore, {adapter} from "../store/todoStore";
import {Button, Paper, TextField} from "@material-ui/core";

function App() {
    const listSelectors = adapter.getSelectors((state: any) => state.todo);
    const list = useSelector(listSelectors.selectAll, shallowEqual)
    const [value, setValue] = useState("")
    const dispatch = useDispatch();

    useEffect(() => {
        console.log('rerender')
    }, [list])

    const add = () => {
        dispatch(todoStore.actions.add({
            id: Date.now().toString(),
            value
        }));
        setValue("")
    }

    const del = (id: string) => {
        dispatch(todoStore.actions.remove(id))
    }

    return (
        <>
            <Paper variant={"outlined"} style={{
                display: "flex",
                alignItems: "center",
                padding: 20,
                margin: 20
            }}>
                <TextField variant={"outlined"} value={value} onChange={(e) => setValue(e.target.value)}/>
                <Button color={"primary"} variant={"contained"} onClick={add}>add</Button>
            </Paper>
            <ul>
                {list.map((item: any) => <li key={item.id}>{item.value}
                    <button onClick={() => del(item.id)}>delete</button>
                </li>)}
            </ul>
        </>
    );
}


export default App;
