import {memo} from 'react';
import { useCallback } from 'react';
import { useState } from 'react';
import {useCounter,useFetch} from './custme_hook';


function Practice4() {
    console.log("testing the usememo ")
    const [count,setcount]=useState(0)
    const increment=useCallback(()=>{
        console.log("use callback in hooks")
        setcount(count+1)
    },[count])
    const { counting,callculatte, decrement,setcall } = useCounter(0);
    /*  */
    const [data] = useFetch('')
    console.log(data)
    
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increment}>Increment</button>
            <div>
            <h1>{callculatte}</h1>
           <button onClick={()=>setcall((c)=>c+1)}>+</button>
           <h1>{counting}</h1>
           <button onClick={decrement}>-</button>
           <div>
            <nav>
                {data.map(item =>item)}
            </nav>
           </div>
            </div>
        </div>
    );
}

export default memo(Practice4);
