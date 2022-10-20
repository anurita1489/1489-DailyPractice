import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React, { useState, useEffect } from 'react';

const Adduser = () => {
    const [data, setData] = useState([{}]);
    const getuser = async () => {
        await axios.get('http://localhost:4000/posts').then((res) => setData(res.data));
    };
    useEffect(() => {
        getuser();
    }, []);
    const[formData,setFormData] = useState({
        name:"",
        email:"",
        mobile:"",
        password:"",
    });
    const[updateData,setUpdateData] = useState({
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
        getuser();
    };
    const handleDelete = async (id) => {
        await axios.delete("http://localhost:4000/posts/" + id).then((res)=> alert("Deleted Success"));
        getuser();
    };
    const handleUpdate = async() => {
        await axios.put(`http://localhost:4000/posts/${updateData.id}`, updateData).then(() => {alert('Data updated'); getuser();})
    };
    const[show, setShow]=useState(false);
    const handleClose=()=>setShow(false);
    const handleShow=()=>setShow(true);
  return (
    <div className="container">
        <div className="row">
            <div className="col-md-7">
                <h2>Add users</h2>
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
        <div>
        <h2>Users Details</h2>
        <table className="table table-dark table-striped">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Mobile No.</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    data && data.map(user=> (
                        <tr>
                            <th scope="row">{user.id}</th>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.mobile}</td>
                            <td style={{display:"flex", justifyContent:"space-between"}}>
                                <button 
                                type="button"
                                className='btn btn-info' 
                                onClick={()=>{handleShow(); setUpdateData(
                                    {name:user.name, email:user.email, mobile:user.mobile, id:user.id},
                                );
                                }}
                                >
                                Edit
                                </button>

                                <button className='btn btn-danger' onClick={()=>handleDelete(user.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
            </tbody>
        </table>
    </div>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div class="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Name</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter user's name"
                value={updateData.name}
                onChange={(e)=> setUpdateData({...updateData, name: e.target.value })}
                />
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter user's email"
                value={updateData.email}
                onChange={(e)=> setUpdateData({...updateData, email: e.target.value })}
                />
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Mobile Number</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter user's number"
                value={updateData.mobile}
                onChange={(e)=> setUpdateData({...updateData, mobile: e.target.value })}
                />
            </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => { handleClose(); handleUpdate(); }}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

    </div>
  )
}

export default Adduser