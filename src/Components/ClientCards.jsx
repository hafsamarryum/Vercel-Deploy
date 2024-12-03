import React from 'react'

const ClientCards = (prop) => {
  return (
    <div className='client-card'>
    <img src={prop.icon} alt='' id='test-icon' />
    <p id='first-para'>{prop.para}</p>
    <div className='avatar-profession-outer'>
      <div className='avatar-div'>
        <img src={prop.img} alt='' id='test-icon' />
         <div className="name-description-outer">
          <h5>{prop.title}</h5>
          <p>{prop.des}</p>
         </div>
      </div>
    </div>
</div>
  )
}

export default ClientCards
