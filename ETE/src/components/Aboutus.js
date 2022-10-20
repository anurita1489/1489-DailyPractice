import React from 'react'
import "./Aboutus.css";
import person1 from "../images/person1.png";
import person2 from "../images/person2.png";
import person3 from "../images/person3.png";
import github from "../images/github.png";
import linkdlin from "../images/linkdlin.png";
const Aboutus = () => {
  return (
    <div>
        <span className='heading'>About us</span>
        <div className='containers'>
          <div className='listofpeople'>
            <div className='box'>
              <img src={person1} height='250px' width='370px' style={{marginLeft:'-98px'}}/>
            </div>
            <br/>
            <div className='names'>
              Apporva Sharma
            </div>
            <br/>
            <div className='setlogo'>
              <div><img src={github} height='40px' width='40px'/></div>
              <div><img src={linkdlin} height='40px' width='40px'/></div>
            </div>
            <br/>
            <div className='intro'>
            Outgoing project manager with more than 5 years of experience in working on high-level projects with mid-sized teams. Looking to leverage project management skills and know-how as a senior project manager at Acme. 
            </div>
          </div>
          <div className='listofpeople'>
            <div className='box'>
              <img src={person3} height='250px' width='370px' style={{marginLeft:'-108px'}}/>
            </div>
            <br/>
            <div className='names'>
              Robert Half
            </div>
            <br/>
            <div className='setlogo'>
              <div><img src={github} height='40px' width='40px'/></div>
              <div><img src={linkdlin} height='40px' width='40px'/></div>
            </div>
            <br/>
            <div className='intro'>
            Outgoing project manager with more than 5 years of experience in working on high-level projects with mid-sized teams. Looking to leverage project management skills and know-how as a senior project manager at Acme. 
            </div>
          </div>
          <div className='listofpeople'>
            <div className='box'>
              <img src={person2} height='250px' width='370px' style={{marginLeft:'-98px'}} />
            </div>
            <br/>
            <div className='names'>
              Kritika Rathore
            </div>
            <br/>
            <div className='setlogo'>
              <div><img src={github} height='40px' width='40px'/></div>
              <div><img src={linkdlin} height='40px' width='40px'/></div>
            </div>
            <br/>
            <div className='intro'>
            Outgoing project manager with more than 5 years of experience in working on high-level projects with mid-sized teams. Looking to leverage project management skills and know-how as a senior project manager at Acme. 
            </div>
          </div>
        </div>
    </div>
  );
};

export default Aboutus