import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from "react-router-dom";
import { loginUser, loginWithGoogle, registerUser } from '../../JS/userslice/userSlice';
import './Signup.css';
import GoogleLogin from 'react-google-login';


export default function SignUp() {
  const dispatch = useDispatch();
  const history = useHistory();
  
  const handleLogin1 = async (googleData) => {
    console.log(googleData);
    dispatch(loginWithGoogle({token: googleData.tokenId}));
    setTimeout(()=>{
      history.push("/films");
      window.location.reload();
    },1000)
  };
  const responseErrorGoogle = (response)=>{}
 
  const [register, setregister] = useState({
    name:"",
    lastName:"",
    age:"",
    email:"",
    password:"",
  })
  const [login, setlogin] = useState({
    email:"",
    password:"",
  });
  const handleLogin=(e)=>{
    e.preventDefault();
    dispatch(loginUser(login));
    setTimeout(()=>{
      history.push("/films");
      window.location.reload();
    },1000)
  };
  
  const handleRegister =(e)=>{
    e.preventDefault();
    dispatch(registerUser(register));
    setTimeout(()=>{
      history.push("/films");
      window.location.reload();
    },1000)
  }
  return (
    <div style={{paddingTop:"50px", backgroundColor: "rgb(27,28,29)" }}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className="col-md-6 mx-auto p-0">
          <div style={{ width: "20px" }}>
            <div className="login-box">
              <div className="login-snip">
                {" "}
                <input
                  id="tab-1"
                  type="radio"
                  name="tab"
                  className="sign-in"
                  defaultChecked
                />
                <label htmlFor="tab-1" className="tab">
                  Sign In
                </label>{" "}
                <input id="tab-2" type="radio" name="tab" className="sign-up" />
                <label htmlFor="tab-2" className="tab">
                  Sign Up
                </label>
                <div className="login-space">
                  <div className="login">
                    <div className="group">
                      {" "}
                      <label htmlFor="user" className="label">
                        email
                      </label>{" "}
                      <input
                        id="user"
                        type="text"
                        className="input"
                        placeholder="Enter your email"
                        onChange={(e) => setlogin({...login,email:e.target.value})}
                      />{" "}
                    </div>
                    <div className="group">
                      {" "}
                      <label htmlFor="pass" className="label">
                        Password
                      </label>{" "}
                      <input
                        id="pass"
                        type="password"
                        className="input"
                        data-type="password"
                        placeholder="Enter your password"
                        onChange={(e) => setlogin({...login,password:e.target.value})}
                      />{" "}
                    </div>
                    {/* <Link to="/password/forgot"> <button>Forget Password ?</button> </Link> */}
                    <div className="group">
                      {" "}
                      <input
                        type="submit"
                        className="button"
                        defaultValue="Sign In"
                        onClick={handleLogin}
                      />{" "}
                    </div>
                    <div className="hr" />
                    <GoogleLogin
                      clientId="90347864426-kffpr6e0mja04u2ahuihb1ruo7pqj2gj.apps.googleusercontent.com"
                      buttonText="Sign in with google"
                      onSuccess={handleLogin1}
                      onFailure={responseErrorGoogle}
                      cookiePolicy={'single_host_origin'}
                      style={{width:"350px!important"}}
          
                    />
                  </div>

                  <div className="sign-up-form">
                    <div className="group">
                      {" "}
                      <label htmlFor="user" className="label">
                        name
                      </label>{" "}
                      <input
                        id="user"
                        type="text"
                        className="input"
                        placeholder="Create your name"
                        onChange={(e)=>setregister({...register,name:e.target.value})}
                      />{" "}
                    </div>
                    <div className="group">
                      {" "}
                      <label htmlFor="pass" className="label">
                        lastname
                      </label>{" "}
                      <input
                        id="pass"
                        type="text"
                        className="input"
                        data-type="text"
                        placeholder="Create your lastname"
                        onChange={(e)=>setregister({...register,lastName:e.target.value})}
                      />{" "}
                    </div>
                    <div className="group">
                      {" "}
                      <label htmlFor="pass" className="label">
                        Age
                      </label>{" "}
                      <input
                        id="pass"
                        type="number"
                        className="input"
                        data-type="text"
                        placeholder="Create your lastname"
                        onChange={(e)=>setregister({...register,age:e.target.value})}
                      />{" "}
                    </div>
                    <div className="group">
                      {" "}
                      <label htmlFor="pass" className="label">
                        Email Address
                      </label>{" "}
                      <input
                        id="pass"
                        type="email"
                        className="input"
                        placeholder="Enter your email address"
                        onChange={(e)=>setregister({...register,email:e.target.value})}
                      />{" "}
                    </div>
                    <div className="group">
                      {" "}
                      <label htmlFor="pass" className="label">
                        {" "}
                        Password
                      </label>{" "}
                      <input
                        id="pass"
                        type="password"
                        className="input"
                        data-type="password"
                        placeholder="create your password"
                        onChange={(e)=>setregister({...register,password:e.target.value})}
                      />{" "}
                    </div>
                    <div className="group">
                      {" "}
                      <input
                        type="submit"
                        className="button"
                        defaultValue="Sign Up"
                        onClick={handleRegister}
                      />{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}