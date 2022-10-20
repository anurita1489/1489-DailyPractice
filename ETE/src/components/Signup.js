import React, { useState } from 'react';
import './Signup.css'
import logoimg from "../images/logoimg.png";
import { NavLink } from 'react-router-dom';
import github from "../images/github.png";
const Signup = () => {
    const [inpval,setInpval] = useState({
        name:"",
        email:"",
        password:""
    })
    const [data,setData] = useState([])
    console.log(inpval);
    const getdata = (e) => {
        // console.log(e.target.value);
        const {value,name}=e.target; 

        setInpval(()=>{
            return{
                ...inpval,
                [name]:value
            }
        })
    }

    const addData = (e) => {
        e.preventDefault();
        const {name,email,password} = inpval;
        if(name === ""){
            alert("Name field is required")
        }else if(email ===""){
            alert("Email field is required")
        }else if(!email.includes("@")){
            alert("Enter valid Email")
        }else if(password ===""){
            alert("Enter the password")
        }else{

            localStorage.setItem("useryoutube",JSON.stringify([...data,inpval]));
        }
    }
  return (
    <div>
        <div className='container'>
            <section>
                <div className='left_data'>
                    <h3>Sign Up</h3>
                    <form>
                        <ul>
                            <li>
                            <label>
                            <input 
                                type="text" 
                                name="name" 
                                placeholder='Name'
                                className='inputvalue'
                                onChange={getdata}
                            />
                            </label>
                            </li>
                            <li>
                            <label>
                            <input 
                                type="text" 
                                name="email" 
                                placeholder='Email'
                                className='inputvalue'
                                onChange={getdata}
                            />
                             <li>
                            <label>
                            <input 
                                type="password" 
                                name="password" 
                                placeholder='Password'
                                className='inputvalue'
                                onChange={getdata}
                            />
                            </label>
                            </li>
                            </label>
                        </li>
                        <li>
                            <input type="submit" className='submitbutton' value='Sign Up' onClick={addData}/>
                        </li>
                    </ul>
                </form>
                </div>
                <div className='right_data'>
                <span className="moving1">
                    <img src={logoimg} alt="image" />
                </span>
                </div>
            </section>
            <p>
                Already Have an Account ?
                <span>
                    <NavLink to="/login">Login</NavLink>
                </span>
                </p>
        </div>
        <div className='footerflex'>
            <div>
                <ul>
                    <li>
                        <b>Hello World</b>
                    </li>
                    <li className='footertext'>
                        We promise to provide best quality services
                    </li>
                </ul>
            </div>
            <div className='footerline'></div>
            <div>
                <ul>
                    <li>
                        <b>Hello World</b>
                    </li>
                    <li className='footertext'>
                        We promise to provide best quality services
                    </li>
                </ul>
            </div>
            <div className='footerline'></div>
            <div className='followlogos'>
                <div>
                    <img src={github} height='40px' width='40px'/>
                </div>
                <div>
                    <img src={github} height='40px' width='40px'/>
                </div>
                <div>
                    <img src={github} height='40px' width='40px'/>
                </div>
                <div>
                    <img src={github} height='40px' width='40px'/>
                </div>
            </div>
            <div className='footerline'></div>
            <div>
                <b>Follow us</b>
            </div>
        </div>
    </div>
  )
}

export default Signup