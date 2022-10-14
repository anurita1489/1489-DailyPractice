import axios from 'axios';
import React, { useEffect , useState} from 'react'

const Userdetails = () => {
    const [data,setData] = useState([{}]);
    useEffect(() => {
        getUser();
    },[]);
    const getUser = async () => {
        await axios.get('http://localhost:4000/posts').then(res=> setData(res.data));
    };
    const handleDelete = async (id) => {
        await axios.delete("http://localhost:4000/posts/" + id).then((res)=> alert("Deleted Success"));
        getUser();
    }
  return (
    <div>
        <h1>Users Details</h1>
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
                                <button className='btn btn-info'>Edit</button>

                                <button className='btn btn-danger' onClick={()=>handleDelete(user.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
            </tbody>
        </table>
    </div>
  )
}

export default Userdetails