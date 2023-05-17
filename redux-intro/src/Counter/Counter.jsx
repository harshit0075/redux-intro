import React, { useState } from "react"
import { addAction, reduceAction } from "../redux/action";
import { store } from "../redux/store";



export const Counter = () => {
    // const[count,setcount]=useState(0)
    const { getState, dispatch, subscribe } = store;
    const [_, setRender] = useState(222);
    // console.log(store)

    subscribe(() => {
        console.log(getState())
        setRender((prev) => prev + 1)
    })

    const handleAdd = () => {
        dispatch(addAction());
        // console.log(getState())
    }

    const handleReduce = () => {
        dispatch(reduceAction());
        // console.log(getState())
    }

    return (
        <div>

            <h1>Counter:{getState().Counter}</h1>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleReduce}>Reduce</button>
        </div>
    )
};