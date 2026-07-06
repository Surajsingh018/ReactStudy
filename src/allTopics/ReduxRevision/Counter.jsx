import { useDispatch, useSelector } from "react-redux"  //to access redux's State
import { incre,decre,reset } from "./ReduxApp";
const Counter = () => {

  const count = useSelector((state)=>{
    return state.counter;
  })

  const dispatch = useDispatch();

  return (
    <div>
     <h1>Counter Redux App {count}</h1> 
     <button className="bg-yellow-500" onClick={()=>dispatch(incre())} >Increment</button>
     <button className="bg-red-600" onClick={()=>dispatch(decre())}>Decrement</button>
     <button className="bg-blue-600" onClick={()=>dispatch(reset())}>Reset</button>
    </div>
  )
}

export default Counter
