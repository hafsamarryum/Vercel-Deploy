import React from 'react'

const ClientCards = (prop) => {
  return (
    <div className='client-card'>
    <i id='slider-quotation' class="ri-double-quotes-l"></i>
    <p id='first-para'>{prop.para}</p>
    <div className='avatar-profession-outer'>
      <div className='avatar-div'>
        <img src={prop.img} alt='' />
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
