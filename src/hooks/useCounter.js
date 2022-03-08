import { useState } from 'react';

const useCounter = (initialValue = []) => {
    const [count, setCount] = useState(initialValue || 0);

    const increment = () => count >= 10 ? setCount(count) : setCount(x => x + 1);
    const decrement = () => count <= -10 ? setCount(count) : setCount(x => x - 1);
    const reset = () => setCount(initialValue || 0);

    return { count, increment, decrement, reset, setCount }
}

export default useCounter;