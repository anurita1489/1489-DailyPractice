import React from 'react';
import './Contactus.css';
import maps from '../images/maps.png';
import github from "../images/github.png";
import { useState } from "react";

function Contactus() {
    const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
  }
  return (
    <div>
        <div className='flexdesign'>
            <div className='texttype'>
                <ul>
                    <li>
                        <h1>Contact Us</h1>
                    </li>
                    <br/>
                    <li>
                        <img src={maps} width="400" height="300"/>
                    </li>
                </ul>
            </div>
            <div className='line'></div>
            <div className='formcss'>
                <form onSubmit={handleSubmit}>
                <ul>
                    <li>
                        <label>
                        <input 
                            type="text" 
                            name="username" 
                            placeholder='Name'
                            className='inputvalue'
                            value={inputs.username || ""} 
                            onChange={handleChange}
                        />
                        </label>
                    </li>
                    <li>
                        <label>
                        <input 
                            type="number" 
                            name="age" 
                            placeholder='Age'
                            className='inputvalue'
                            value={inputs.age || ""} 
                            onChange={handleChange}
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
                            value={inputs.email || ""} 
                            onChange={handleChange}
                        />
                        </label>
                    </li>
                    <li>
                        <input type="submit" className='submitbutton'/>
                    </li>
                </ul>
                </form>
            </div>
        </div>
        <br/>
        <br/>
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
  );
};

export default Contactus