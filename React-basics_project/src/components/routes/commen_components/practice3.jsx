import React,{useState,useEffect,useRef} from 'react';
import Callback from './practice4'

const Practice3 = () => {

    const[input,setinputvalues]=useState("")

    const intervels =useRef("") 
        useEffect(()=>{
            intervels.current=input
        },[input])
        
    const onchange= (e)=>{
        setinputvalues(e.target.value)
    }
    return (
        <div>
            <input type="text"
            values={input}
            onChange={onchange}/>
           <h1>Current Value is : {input}</h1>
           <h1>Previous Value is: {intervels.current}</h1>
           <div>
            <Callback/>
           </div>
        </div>
    );
};
export default (Practice3);