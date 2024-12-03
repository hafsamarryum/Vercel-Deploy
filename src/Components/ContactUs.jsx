import React from 'react';
import '../Css/ContactUs.css';
import ContactList from './ContactList';

const ContactUs = () => {
  return (
    <div className='contact-parent'>
      <div className='contact-outer'>
        <h1 className='GetIn'>Get In Touch</h1>
        <div className='contact-wrapper'>
          <div className='contact-left'>
            <div className='contact-left-outer'>
              <h1>Write Us</h1>
              <form action='' className='form-outer'>
                <input type='text' placeholder='Full Name' />
                <input type='email' placeholder='Email' />
                <input type='text' placeholder='Tel:' />
                <textarea
                  name=''
                  id=''
                  placeholder='Enter your message....'
                ></textarea>
                <div className='send-btn'>Send</div>
              </form>
            </div>
          </div>
          <div className='contact-right'>
            <div className="contact-right-upper">
              <h1>Contact Us</h1>
              <div className="contact-li-wrapper">
                 <ContactList />
              </div>
            </div>
            <div className="contact-right-lower responsive-map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.34092369085!2d-0.17011802414349625!3d51.525306509396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b0deb8d5f33%3A0x2109f7f365fb2976!2sDevFinn%20Limited!5e0!3m2!1sen!2s!4v1733167599104!5m2!1sen!2s" allowFullScreen Loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
