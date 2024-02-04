import { useState } from "react"
import './Counter.css'
function Counter() {
    let [count, SetCount] = useState(0)
    function increaseCount() {
        SetCount(count + 1)
    }
    function decreaseCount() {
        SetCount(count - 1)
    }
    return (
        <div className="counter">
            <button onClick={decreaseCount}>-</button>
            <h1>{count}</h1>
            <button onClick={increaseCount}>+</button>
        </div>
    )
}

export default Counter