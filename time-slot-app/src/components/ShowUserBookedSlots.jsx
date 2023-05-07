import React from 'react'

export const ShowUserBookedSlots = ({userData}) => {
  return (
    <div className='textstyle'>{
        userData.map((data, index)=>(
            <div key={index}>
                Booked with {data.personName}
                <br/>
                <span style={{color : "black"}}>Slots:</span> 
                
            {data.slots.map(slot=>(
                <p key={slot}>{slot}</p>
            ))}
            </div>
        ))
    }</div>
  )
}
