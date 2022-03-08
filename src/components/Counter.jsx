import React from 'react'
import useCounter from '../hooks/useCounter';

export default function Counter() {

    const { count, setCount, increment, decrement, reset } = useCounter(0);
    return (
        <div>
            <h1>EJERCICIO 1</h1>
            <h2>Counter: { count }</h2>
            <h3>Min value: -10</h3>
            <h3>Max value: 10</h3>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}