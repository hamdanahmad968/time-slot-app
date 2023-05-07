import './App.css';

import React from 'react'
import { SelectPerson } from './components/SelectPerson';
import { ShowSlots } from './components/ShowSlots';
import { ShowUserBookedSlots } from './components/ShowUserBookedSlots';



export default function App() {
  const [selectedPerson, setSelectedPerson] = React.useState(undefined);
  // const [refresh, setRefresh] = React.useState(true);

const getBookedSlots = (personName)=>{
  const bookingController = localStorage.getItem('bookings');
  if(bookingController){
    const bookings_ = JSON.parse(bookingController);
    // console.log(getBookedSlots)
    return bookings_[personName].bookedSlots
  }
  return []
}

const getSlots = (personName)=>{
  const bookingController = localStorage.getItem('bookings');
  if(bookingController){
    const bookings_ = JSON.parse(bookingController);
    return bookings_[personName].slots
  }
  return []
}

const getUserData = () =>{
  const userDataController = localStorage.getItem('user_data');
  if(userDataController){
    return JSON.parse(userDataController)
  }
  return []
}



  React.useEffect(()=>{

     save_initial_values();

  },[])


  const onBookSlot = (slot)=>{

    const bookingController = localStorage.getItem('bookings');

    const bookings = JSON.parse(bookingController);
    const userData  = getUserData();
    
    bookings[selectedPerson].bookedSlots.push(slot);
    
    let meetWithPerson = userData.find(meet=> meet.personName===selectedPerson);
    if(meetWithPerson){
      meetWithPerson.slots.push(slot);
    }else{
      meetWithPerson = {
        personName : selectedPerson,
        slots:[slot]
      }
      userData.push(meetWithPerson);
    }

    
    window.location.href="/";


    localStorage.setItem('user_data', JSON.stringify(userData));
    localStorage.setItem('bookings', JSON.stringify(bookings));

  }
  const allowedPersons = ["ish" , "shiv" , "shanti" , "shrav" , "poo"];

  return (
    <div className='main'>

      <ShowUserBookedSlots userData = {getUserData()} />

      <SelectPerson  setSelectedPerson={setSelectedPerson} allowedPersons={allowedPersons} />
{
  selectedPerson &&      <ShowSlots onSlotSelect={(slot)=>{
        onBookSlot(slot)
      }}  
      bookedSlots = { getBookedSlots(selectedPerson)} 
      slots={getSlots(selectedPerson)} /> }
     </div>
  )
}



 function  save_initial_values(){

    const primordial_value = {
      "ish":{
        slots:["9:00-10:00", "10:00-11:00" , "11:00-12:00" ,"13:00-14:00" ,"14:00-15:00" ],
        bookedSlots:[]
      },

      "shiv":{
        slots:["12:00-13:00" , "15:00-16:00" ,"16:00-17:00"],
        bookedSlots:[],
      },
      "shanti":{
        slots:["9:00-10:00", "10:00-11:00" , "11:00-12:00"],
        bookedSlots:[]
      },
      "shrav":{
        slots:["17:00-18:00", "18:00-19:00"],
        bookedSlots:[]
      },
      "poo":{
        slots:["20:00-21:00"],
        bookedSlots:[]
      },


    }
    if(!localStorage.getItem('bookings')){
      localStorage.setItem('bookings', JSON.stringify(primordial_value));
    }
    // {
    //   personName: "Person"
    //   slots:[]
    // }
    const user_data = []
    if(!localStorage.getItem('user_data')){
     localStorage.setItem('user_data', JSON.stringify(user_data));
    }
}