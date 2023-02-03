import React,{useState,useEffect, useRef, useMemo,useCallback} from 'react';
import {Memo} from './usememo'
import Callback from './usecallback'

function Reference() {
    const [value,setvalue]=useState(0)
    const initialValue=useRef(0)
    const inputEl = useRef(null);
    /*  */

    useEffect(()=>{
        initialValue.current=value;
    },[value])

     const buttonclickfocus=()=>{
        inputEl.current.focus()
    } 

const memozations = useMemo(()=>{
   return <Memo/>
},[])

/* callback */

const [data,setdata]=useState(0)

const handleclick=useCallback(()=>{
    setdata(data+1234)
},[data])

    return (
        <div>
            <div>
                <form>
                    <input  value={value}
                    onChange={(e)=>setvalue(e.target.value)} />
                    <button>count {initialValue.current} </button>
                </form>
                 <input ref={inputEl}/>
                <button onClick={buttonclickfocus}>Focus the input</button>
            </div>
            <div>
                {memozations}
            </div>
            <div>
            <p>current value is {data}</p>
        <button onClick={()=>setdata((count)=>count+1)}>calback value</button>
                <Callback handleclick={handleclick}/>
            </div>
        </div>
    );
}

export default Reference;