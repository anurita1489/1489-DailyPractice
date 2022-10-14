import axios from 'axios';
import React, { useState } from 'react'

const Adduser = () => {
    const[formData,setFormData] = useState({
        name:"",
        email:"",
        mobile:"",
        password:"",
    });
    const handleFormSubmit = async(e) => {

        let response = await axios.post('http://localhost:4000/posts',formData);

        if(response){
            alert("Data Submitted Successfully");
        }
        else{
            alert("Something went Wrong");
        }

        setFormData({
        name:"",
        email:"",
        mobile:"",
        password:"",
        });
    };
  return (
    <div className="container">
        <div className="row">
            <div className="col-md-7">
                <h1>Add users</h1>
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Name</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter user's name"
                value={formData.name}
                onChange={(e)=> setFormData({...formData, name: e.target.value })}
                />
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter user's email"
                value={formData.email}
                onChange={(e)=> setFormData({...formData, email: e.target.value })}
                />
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Mobile Number</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter user's number"
                value={formData.mobile}
                onChange={(e)=> setFormData({...formData, mobile: e.target.value })}
                />
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleFormControlInput1" placeholder="Enter user's password"
                value={formData.password}
                onChange={(e)=> setFormData({...formData, password: e.target.value })}
                />
            </div>
            <div class="mb-3">
                <button className="btn btn-primary" onClick={handleFormSubmit}>Add</button>
            </div>
        </div>
    </div>
  )
}

export default Adduser