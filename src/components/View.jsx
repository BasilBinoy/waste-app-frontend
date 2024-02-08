import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'

const View = () => {
    const [data,setData]= new useState([])
const getData = () =>{
    axios.get("http://localhost:3001/api/waste/viewall").then
((response)=>{
  setData(response.data)
}
)
}
useEffect(()=>{getData()},[])
  return (
    <div>
        <Navbar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <table class="table">
  <thead>
    <tr>
      <th scope="col">name</th>
      <th scope="col"> phone number</th>
      <th scope="col">street</th>
      <th scope="col">house</th>
    </tr>
  </thead>
  <tbody>
    {
      data.map(
        (value,index)=>{
          return <tr>
          <th scope="row">{value.Name}</th>
          <td>{value.Phone}</td>
          <td>{value.Street}</td>
          <td>{value.House}</td>
        </tr>
        
        }
      )
    }
  </tbody>
</table>
                </div>
            </div>
        </div>
    </div>
  )
  
}

export default View