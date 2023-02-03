import React,{memo,Fragment} from 'react';
import{useHooks} from './custome_hooks_isonline'
import{useFetch} from './fetchdata_custome_hook'

function CustomeHooks() {
  
    const isonline=useHooks()
        function handelclicks (){
            console.log("i am rendering the callback functions")
            console.log("Saved to you progress")
        }
/*fetch data  */
const [fetchData]=useFetch('https://dummyjson.com/products/1')

console.log(fetchData)
console.log("fetchData",fetchData)
    return (
        <Fragment>
              <h1>{isonline ? "hello":"world"}</h1>
              <button disabled={!isonline} onClick={handelclicks}>{isonline? "Save Progress":"Reconnecting"}</button>

              <li className='text-orange-600'> {
              fetchData.map(item =>item.title)
              }</li>
              
        </Fragment>
    );
}

export default memo(CustomeHooks);