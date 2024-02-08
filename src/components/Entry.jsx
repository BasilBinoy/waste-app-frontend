import axios from 'axios'
import React, { useState } from 'react'

const Entry = () => {
  
    const [input,setInput] =new useState(
        { 
            "Name": "",          
     "Phone": "",
     "Street":"",
     "House":"",
     }

     )
     const inputHandler=(event)=>{
        setInput({...input,[event.target.name]:event.target.value})
     }  
     const readValues=()=>{
        console.log(input)
        axios.post("http://localhost:3001/api/waste/add",input).then(
            (response)=>{
                console.log(response.data)
                if (response.data.status=="success") {
                    alert("sucessfully added")
                    setInput(
                    { "Name": "",          
                    "Phone": "",
                    "Street":"",
                    "House":"",})
                } else {
                      alert("Something went wrong")
                }
            }
        )
     }
  return (
    <div>
        <NavBar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12-col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row g-3">
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">name</label>
                        <input type="text" className="form-control" name='vistorName' value={input.Name} onChange={inputHandler}/>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">Phone</label>
                    <input type="text" className="form-control"  name='vistorPhone' value={input.Phone} onChange={inputHandler}/>
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">street</label>
                    <input type="text" className="form-control" name='PurposeOfVisit' value={input.Street} onChange={inputHandler} />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">House</label>
                    <input type="text" className="form-control"name='vistorAadhar' value={input.House} onChange={inputHandler} />
                    </div>

                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <button className="btn btn-info" onClick={readValues}>SUBMIT</button>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Entry