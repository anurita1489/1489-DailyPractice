import React from 'react'
import logoimg from "../images/logoimg.png";
import "./Home.css";
const Home = () => {
  return (
    <div className='main'>
        <span className='words'>
            Welcome to <br/>Phoenix Database
            <br/>
            <h6 className='tagline'>
            “The battles that count aren't the ones for gold medals. The struggles within yourself—the invisible, inevitable battles inside all of us—that's where it's at."
            </h6> 
        </span>
        <span className="moving">
            <img src={logoimg} alt="image" />
        </span>
    </div>
  );
};

export default Home