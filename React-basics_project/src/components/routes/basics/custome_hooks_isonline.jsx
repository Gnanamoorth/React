import {useState,useEffect} from 'react';

function useHooks() {
    const[isonline,setisonline]=useState(true)
    useEffect(()=>{
        function handleisonline(){
            setisonline(true)
        }
        function handleisofline(){
            setisonline(false)
        }
        window.addEventListener('online',handleisonline)
        window.addEventListener('offline',handleisofline)
        return()=>{
            window.removeEventListener('online',handleisonline)
            window.removeEventListener('offline',handleisofline)
        }
    },[])
    return (isonline);
}

export  {useHooks} ;