import React, { useState } from "react";
import ReactDOM from "react-dom";
import { RiLockPasswordFill } from "react-icons/ri";
import { RiUser3Fill } from "react-icons/ri";


import "./css/style.css";

function App() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  const database = [
    {
      username: "fatih",
      password: "1234"
    },
    {
      username: "abdullah",
      password: "1234"
    },
    {
      username: "meryem",
      password: "1234"
    }
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } 
      else if(userData.password ===""){
        alert("Şifre Alanı Boş Geçilemez");
      }
      else if(userData.username ===""){
        alert("Kullanıcı Adı Alanı Boş Geçilemez");
      }
        else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    
    <div className="form">
      
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          
          <label> <RiUser3Fill style={{color:'#0071BD' ,fontSize:'25px'}}></RiUser3Fill>Kullanıcı Adı </label>
          <input type="text" name="uname" required  placeholder="Kullanıcı Adı"/>
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label > <RiLockPasswordFill style={{color:'#0071BD' ,fontSize:'25px'}}></RiLockPasswordFill>Şifre </label>
          <input type="password" name="pass" required   placeholder="Şifre"/ >
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit"/>
        </div>
      </form>
    </div>
  );

  return (
    <div className="app">
      <div className="login-form"> 
      <img  className="pl" src="https://resultlabai.com/assets/img/logo.svg" width="100" height="50"/>
        <div className="title center">Kullanıcı Girişi</div>
        {isSubmitted ? <div className="center">Sisteme Hoşgeldiniz</div> : renderForm}
      </div>
    </div>
  );
}

export default App;