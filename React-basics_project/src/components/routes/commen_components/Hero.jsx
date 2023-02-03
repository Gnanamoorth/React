import "./Hero.css";
import React from 'react';
const HomePage = (props) => {
  return (
   <div className={props.clsname}>
      <img className={props.img} src={props.url} alt=""/>
      <div className={props.headings}>
      <h1>{props.heading}</h1>
      <p>{props.text}</p>
      <a href={props.link} className={props.btnclass}>{props.plane}</a>
      </div>
    </div>
  )
}
export default  HomePage;
