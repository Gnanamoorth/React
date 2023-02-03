import React from 'react';
import Readucer from './practice3'
import { useState } from 'react';


function DynamicNames() {
    const [value,setvalue]=useState("")
    const[names,setname]=useState([])

    const getvalues= (e)=>{
        setvalue(e.target.value)
    }

    const mysubmit = (e)=>{
        e.preventDefault()
        setname(name =>[...name,value])
    }
    const reset =(e)=>{
        e.preventDefault()
        setname([])
    }
    const Uppercase =(e)=>{
        e.preventDefault()
        setname([value.toUpperCase()])
    }
    return (
        <div>
            <form onSubmit={mysubmit}>
                <input type="text"
                 value={value}
                onChange={getvalues}
                 />
                 <button title='submit' type='submit'>submit</button>
                 <button title='Reset' onClick={reset}>Reset</button>
                 <button title='Uppercase' onClick={Uppercase}>Uppercase</button>
            </form>
            <ul>
            {names.map(e=><li key={e}>{e}</li>)}
            </ul>
           <a href="https://nodejs.org/dist/v19.4.0/node-v19.4.0.pkg" download>download</a>
           <p contentEditable="true">Hello world</p>
         {/*   <marquee direction="right">gnanamoorthy</marquee> */}
         <div>
            <Readucer/>
         </div>
        </div>
    );
}

export default DynamicNames;