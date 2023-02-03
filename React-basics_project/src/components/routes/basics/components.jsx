import React from 'react';
import Refrence from './useref'

function Components(props) {
    const Person1 =()=>{
        return(
            <>
            <h1>who are you man</h1>
            </>
        )
    }
    const Person2 =()=>{
        return(
            <>
            <Person1/>
            <h1>I am {props.name}</h1>
           
            </>
        )
    }
/* conditional rendering */
const Welcome=()=>{
    return(
        <>
        <h1>Welcome back to this site</h1>
        </>
    )
}
const Login=()=>{
    return(
        <>
        <h1>Login to the site</h1>
        </>
    )
}

const Conditional =(props)=>{
    if(props.status){
        return <Welcome/>;
    }
    return<Login/>;
}

/*  */
    return (
        <div>
            <Person2/>
            <Conditional status={true}/>
            <Refrence/>
        </div>
    );
}
export default Components;