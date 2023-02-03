import Navbar from '../navbar/Navbar'
import React from 'react';
import ServicePage from '../commen_components/Hero'

const Service = () => {
    return (
        <div className='service-page'>
            <Navbar/>
          <ServicePage
          clsname="servicepage"
          img="service_page_img"
          url="https://github.com/tech2etc/React-Trippy-Tour-Website-Template/blob/main/src/assets/1.jpg?raw=true"
          heading="Services"
          />
        </div>
      );
}
 
export default Service;