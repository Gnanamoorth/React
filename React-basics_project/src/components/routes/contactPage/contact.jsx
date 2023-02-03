import Navbar from '../navbar/Navbar'
import React from 'react';
import ContactPage from '../commen_components/Hero'
import Hooks from '../basics/hooks'
const Contact = () => {
    return (
        <div className='contact-page'>
          <Navbar/>
          <ContactPage
          clsname="contactpage"
          img="contact_page_img"
          url="https://github.com/tech2etc/React-Trippy-Tour-Website-Template/blob/main/src/assets/2.jpg?raw=true"
          heading="Contact"
          />
          <div>
          <Hooks/>
          </div>
        </div>
      );
}
 
export default Contact;