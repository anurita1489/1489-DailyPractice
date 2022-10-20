import React from 'react'
import './Dashboard.css';
import dblogo from '../images/dblogo.png';
import person from '../images/person.png';
import goal from '../images/goal.png';
import graph from '../images/graph.png';
import Adduser from './Adduser';
import Fileupload from './Fileupload';
function Dashboard() { 
  return (
    <div>
        <div className='mainbox'>
            <div className='leftside'>
                <div>
                    <img src={dblogo} height='25px' width='35px' className='placeimage'/>
                </div>
                <div><h2>Dashboard</h2></div>
            </div>
            <div className='middle'>
                <div className='div1'>
                    <h2>Greetings Admin,</h2>
                </div>
                <div className='div2'>
                    <div className='cards'>
                        <div className='views1'>
                            <span><b>Person</b></span>
                            <br/>
                            <span>6</span>
                        </div>
                        <div>
                            <img src={person} height='100px' width='90px'/>
                        </div>
                    </div>
                    <div className='cards'>
                        <div className='views2'>
                            <span><b>Goals<br/> Achieved</b></span>
                            <br/>
                            <span>3</span>
                        </div>
                        <div>
                            <img src={goal} height='100px' width='90px'/>
                        </div>
                    </div>
                    <div className='cards'>
                        <div className='views3'>
                            <span><b>Performance<br/>Rate</b></span>
                            <br/>
                            <span>70%</span>
                        </div>
                        <div>
                            <img src={graph} height='100px' width='90px'/>
                        </div>
                    </div>
                </div>
                <div className='div3'><Adduser/></div>
            </div>
            <div className='rightside'>
                <div className='topskills'>
                    <h2>Top Skills</h2>
                    
                    <span>
                        <img src={goal} height='50px' width='50px'/>
                    </span>
                    <span>
                        UI/UX Designing
                    </span>
                    <br/>
                    <span>
                        <img src={goal} height='50px' width='50px'/>
                    </span>
                    <span>
                        Illustrator
                    </span>
                    <br/>
                    <span>
                        <img src={goal} height='50px' width='50px'/>
                    </span>
                    <span>
                        Web Development
                    </span>
                    <br/>
                    <h2>Upload an image</h2>
                    <span><Fileupload/></span>
                </div>
                <div className='calender'></div>
            </div>
        </div>
    </div>
  );
};

export default Dashboard;