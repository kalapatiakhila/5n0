import { useState } from "react";
function Counter1() {
    const [count, setCount] = useState(0);
    const increaseCount = () => {
        setCount(count + 1);
    };
    return (
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={increaseCount}>
                Increment
            </button>
        </div>
    );
}
export default Counter1;
