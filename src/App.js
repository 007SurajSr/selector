// import './App.css';
// import{ useState }from 'react'


//  const countries = [
//   {
//     name : 'India', value: 'IN', cities:[ 
//       'Delhi',
//       'Mumbai'
//     ] },
//   {
//     name : 'Pak', value: 'PK', cities:[
//       'Lahore',
//       'Karachi'
//     ] },
//   {
//     name : 'Bangladesh', value: 'BG', cities:[
//       'Dhaka',
//       'Chittagong'
//     ] }
//  ];



//  export default function App(){
//   const [country, setCountry] = useState(0);
  
  
//   return (
//    <>  <div className = "App" id='country'>
//       <select value={country} onChange={(e) =>{ setCountry(e.target.value) }}>
//         {countries.map((item, index) => { return <option value={index} key={index}>{item.name}</option> }) }
//          </select>
    
//          <select >
//           {countries[country].cities.map((city, index) => {
//           return <option key={index} value={city}>{city}</option>
//         })}
//       </select>
//       </div>
//     </>
//   )
//  }


 
import React from "react";
import {useState} from 'react'

const countries = [{name: "India", value : "IN", cities: ["Delhi"," Mumbai"]},
{name: "Pakistan", value : "PK", cities: ["Lahore", "Karachi"]},
{name: "Bangladesh", value : "BG", cities: ["Dhaka","Chhittagong"]}]

export default function App() {
  const [country, setCountry] = useState(0);


  return(
  <>
  <div className="App" id="country" >
    <select value={country} onChange={(e) => setCountry(e.target.value)} >
      {countries.map((item, index) => {return <option value={index} key= {index} > {item.name} </option>})} 
    </select>
    <select>
      {countries[country].cities.map((city,index) => { return <option key={index} value={city} > {city} </option> } )}
    </select>
  
  </div>
  </>
  )
}