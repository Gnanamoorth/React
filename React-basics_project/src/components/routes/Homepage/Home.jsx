import Navbar from '../navbar/Navbar'
import HomePage from '../commen_components/Hero';
import Content1 from '../commen_components/content1';
import React from 'react';
const Home = () => {

  return (
    <div className='Home-page'>
      <Navbar/>
      <HomePage
      clsname="homepage"
      img="home_page_img"
      url="https://github.com/tech2etc/React-Trippy-Tour-Website-Template/blob/main/src/assets/12.jpg?raw=true"
      headings="home_page_heading"
      heading="Your Journey Your Story"
      text="Choose Your Favioret Destinations"
      plane="Travel Plane"
      link="/"
      btnclass="show"
      />
      <div>
      <Content1></Content1>
      </div>
    </div>
  );
}
export default Home;


 