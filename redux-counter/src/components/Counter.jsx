import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { increment, decrement } from '../redux/slice/CounterSlice'

function Counter() {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
    const handleIncrement = () => {
        dispatch(increment())
    }
    const handleDecrement = () => {
        dispatch(decrement())
    }

  return (
    <div>Counter
        <br />
        <br /><br />
        <button onClick={handleIncrement}>+</button>

        <br />
        <br />
        <span>{count}</span>
<br />
<br /><br />
{
    count>0 && <button onClick={handleDecrement}>-</button>
}
    </div>
  )
}

export default Counter