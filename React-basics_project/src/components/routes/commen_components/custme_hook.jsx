import { useEffect } from "react";
import { useState } from "react";

const useCounter = initialValue => {
  const[callculatte,setcall]=useState(0)
  const [counting, setCount] = useState(initialValue);  
 
  useEffect(() => {
    setCount(callculatte * 8);
  },[callculatte]);

  const decrement = () => {
    setCount(counting - 1);
  };
  return { counting,callculatte, decrement,setcall, };
};

const useFetch =(url)=>{
  const[data,setdatas]=useState([])

  useEffect(()=>{
    fetch(url)
    .then(response=>response.json())
    .then(data=>setdatas([data]))
},[url]);

  return[data]
}
export {useCounter,useFetch};
