import { useState , useEffect } from 'react';

function useFetch(url) {
    const [fetchData,setFetchDate]=useState([])
useEffect(()=>{
    fetch(url)
    .then(response=>response.json())
    .then(data=>setFetchDate([data]))
},[url]);

    return [fetchData]
}
export {useFetch};
