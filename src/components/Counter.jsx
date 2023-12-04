import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement,reset } from '../redux/slices/CounterSlice';

const Counter = () => {

    const count = useSelector((state) => state.counter.value );
    const dispatch = useDispatch();

  return (
    <div className='bg-black flex flex-col justify-center items-center h-screen '>
      <h1 className='text-white font-semibold text-xl md:text-3xl mb-10'>Counter App Using Redux</h1>
      <div className='bg-white p-3 md:p-5 flex gap-3 md:gap-5 rounded-md '>
      <button
      className='text-lg md:text-xl font-semibold  px-3 md:px-5 shadow-xl rounded-full bg-black text-white'
      onClick={() => dispatch(decrement())}

>
Decrement
</button>
<br/>
<br/>

<div className='flex justify-center items-center border-x-2 px-5 md:px-10 border-black font-bold  text-lg md:text-2xl'>{count}</div>

<br/>
<br/>

<button
 className='text-lg md:text-xl font-semibold  px-3 md:px-5 shadow-xl rounded-full bg-black text-white'

onClick={() => dispatch(increment())}
>
  
  Increment
</button>
      </div>

      <button
 className='text-lg md:text-xl font-semibold  px-3 py-1 md:px-5 shadow-xl rounded-full bg-white text-black mt-10'

onClick={() => dispatch(reset())}
>
  
  Reset
</button>
     
    </div>
  )
}

export default Counter
