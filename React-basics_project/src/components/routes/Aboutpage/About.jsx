import Navbar from '../navbar/Navbar'
import React from 'react';
import { useState,createContext} from 'react';
import Practice from '../commen_components/practice'
import AboutPage from '../commen_components/Hero'
/*  */
export const studentcontext= createContext("")
/*  */
const About = () => {
  /*  */
   const[name,setname]=useState("mohanraj")
  const setvalue=(e)=>{
    setname(e.target.value)
  }

  const handleclick=()=>{
    console.log("button is clicke")
  };
  /*  */
    return (
        <div className='about-page'>
            <Navbar/>
          <AboutPage
          clsname="aboutpage"
          img="about_page_img"
          url="https://github.com/tech2etc/React-Trippy-Tour-Website-Template/blob/main/src/assets/night.jpg?raw=true"
          heading="About Page"
          />
          {/*  */}
            <form>
            <input type="text" 
            onChange={setvalue}
            value={name}
            />
          </form>
          <studentcontext.Provider value={{name,handleclick}}>
          <Practice/>
          </studentcontext.Provider> 
        </div>
      );
}
export default About;