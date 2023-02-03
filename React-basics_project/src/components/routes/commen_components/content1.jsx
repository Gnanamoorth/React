import { useState, useEffect } from 'react';
//import { Slide } from 'react-slideshow-image';

function SlideShow (){
    const [currentSlide,setSlide]=useState(0);
const Slides=[{
    imgage:"https://github.com/tech2etc/React-Trippy-Tour-Website-Template/blob/main/src/assets/10.jpg?raw=true",
    title:"Natural Falls"
},
{
    imgage: "https://github.com/tech2etc/React-Trippy-Tour-Website-Template/blob/main/src/assets/4.jpg?raw=true",
    title:"Himalayas"
},
{
    imgage: "https://github.com/tech2etc/React-Trippy-Tour-Website-Template/blob/main/src/assets/8.jpg?raw=true",
    title:"Andaman and Nicobar Islands"
}
]
    useEffect(()=>{
        const interval= setInterval(()=>{
           const totalslide=3
            setSlide(prevslide =>(prevslide+1)%totalslide)
        },3000)
        return () => clearInterval(interval);
    },[])
    return (
        <div className='naturals_places'>
          <img src={Slides[currentSlide].imgage} alt="slide" />
          <h1>{Slides[currentSlide].title}</h1>
        </div>
      );
}
export default SlideShow;