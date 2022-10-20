import React, {useState} from 'react'
import './Login.css'
import logoimg from "../images/logoimg.png";
import { useHistory } from 'react-router-dom';
import github from "../images/github.png";
const Login = () => {
    let history = useHistory();
    const [inpval,setInpval] = useState({
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

        const getuserArr = localStorage.getItem("useryoutube");

        const {email,password} = inpval;
        if(email ===""){
            alert("Email field is required")
        }else if(!email.includes("@")){
            alert("Enter valid Email")
        }else if(password ===""){
            alert("Enter the password")
        }else{

            if(getuserArr && getuserArr.length){
                const userdata = JSON.parse(getuserArr);
                const userlogin =userdata.filter((el,k)=>{
                    return el.email === email && el.password === password
                });
                if(userlogin.length === 0){
                    alert("Invalid Details")
                }
                else{
                    console.log("Data Submitted");
                    history.push("/dashboard")
                }
            }
        }
    }
  return (
    <div>
        <div className='container'>
            <section>
                <div className='left_data'>
                    <h3>Login</h3>
                    <form>
                        <ul>
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
                            <input type="submit" className='submitbutton'value='Login' onClick={addData}/>
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

export default Login