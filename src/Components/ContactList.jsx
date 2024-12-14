import React from 'react'
import location from '../assest/contactUs/location.png'
import message from '../assest/contactUs/message.png'
import phone from '../assest/contactUs/phone.png'
import linkedin from '../assest/contactUs/linkedin.png'

const ContactList = () => {
    const ContactListData = [
        {
              id: 1,
              img: location ,
              des: "Dell Way, Round Rock, TX 78682"
        },
        {
              id: 2,
              img: phone ,
              des: "+92 312 6426807"
        },
        {
              id: 3,
              img: message ,
              des: "SiredBits@gamil.com"
        },
        {
              id: 4,
              img: linkedin ,
              des: "https://SiredBits.com"
        }
    ]
  return (
    <>
     {ContactListData.map((ele, i)=>{
       return(
        <div className="icon-li-wrapper" key={i}>
        <img src={ele.img} alt="" srcset="" />
        <p>{ele.des}</p>
       </div>
       )
     })}
    </>
  )
}

export default ContactList