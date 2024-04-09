
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment,decrement } from '../features/auth/authSlice'

function counter() {

    const{count}=useSelector((state)=>state.auth)
    const dispatch = useDispatch()
    
  return (
    <div>
        <p>count:{count}</p>
        <button onClick={()=>dispatch(increment())}>+</button>
        <button onClick={()=>dispatch(decrement())}>-</button> 
    </div>
  )
}

export default counter
