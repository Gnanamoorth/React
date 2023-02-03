import React,{ useState,useEffect, useContext } from "react";
import Dynamic from './pracyice2'
import {studentcontext} from '../Aboutpage/About'
const Practice = () => {

    const initialCount=0
    const[count,setCount]=useState(initialCount)
    const[count2,setcount2]=useState(initialCount)
    const[count3,setcount3]=useState(initialCount)
    const[inputvalue,setinputvalue]=useState("gnanamoorthy")
    const[studentName,setStudentName]=useState(["jhon","ben"])
    const[fetchvalue,setfetchvalue]=useState([]) 

    function Increment (){
        setCount(count+1)
    }

    function Decrement (){
        setCount(count-1)
    }

    useEffect(()=>{
         setTimeout(()=>{
            setcount2(() => count*2)
           // setcount3(() => Math.ceil(count/2))
            },100)
    },[count]);

   useEffect(()=>{
        setTimeout(()=>{
           setcount3(() => Math.ceil(count/2))
           },100)
   },[count]); 

const onchages=(event)=>{
const newvaluee=event.target.value
    setinputvalue(newvaluee);
}
const setname= (e)=>{
    e.preventDefault()
    setStudentName(name=>[...name,"moorthy"])
}
useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json =>setfetchvalue([json]))
},[])

/*  */
const{name,handleclick}= useContext(studentcontext)
    return (
        <div>
            <h1>Ther are {count}  number of pepoles are work in the company</h1>
            <button onClick={Increment}>Increment</button>
            <button onClick={Decrement}>Decrement</button>
            <button onClick={()=>setCount(initialCount) }>Reset</button>
            <h1>{count2}</h1>
            <h1>{count3}</h1> 
            <div>
                <form>
                    <input type="text" placeholder="Enter Your Name"
                    value= {inputvalue}
                    onChange={onchages}/>
                    <button type="submit">submit</button>
                   <h1> name:{inputvalue}</h1>
                </form>
            </div>
            <nav>
                <ul>
                    {studentName.map(e=><li>{e}</li>)}
                </ul>
                <button onClick={setname}>show all the student name</button>    
            </nav>
            {fetchvalue.map(e => <h1>{e.title}</h1>)}
            <div>
                <h1>{name}</h1>
            </div>
            <Dynamic/>
            <button onClick={handleclick}>click me</button>
        </div>
      );
}
export default Practice;
