import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

function Register(){
    const [register, setRegister] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    const [numberMessage, setnumberMessage] = useState();
    const [emailMessage, setEmailMessage] = useState("");
    const [check_email, setcheck_email] = useState("")
    const navigate = useNavigate()

    function checkInputField(){
        if(username !== '' &&number !== '' && email !=='' && password !== ''){
            submitData();
        }
        else{
            alert("Please Fill all the Fields")
        }
    }

    function submitData(){
        
        // check_email = email.includes("@")
        // console.log(check_email,"check_email")
        // if(check_email == false){
        //     setEmailMessage("Please Enter a valid Email");
        // }
        // else if(number.length > 10 || number.length < 10 ){
        //     setnumberMessage("Please Enter a valid number");
        // }
        let data = [];
        let store = JSON.parse(localStorage.getItem("data"))?JSON.parse(localStorage.getItem("data")):[]
        data = [...data,...store]
        data.push({"username":username,"password":password,"email":email,"number":number});
        localStorage.setItem("data",JSON.stringify(data))
        console.log(username,password,email,number,"dsvd")
        console.log(data)
        navigate("/login")
    }
    return(
        <div className="register_heading">
            <div className="heading"> 
                <h1>Register Page</h1>
            </div>
            <div className="Register_container">
                <div className="Register">
                    <form action="">
                        <label >Username</label>
                        <input id="username" onChange={(e)=>setUsername(e.target.value)} type="text" />
                        <label >Password</label>
                        <input id="password" onChange={(e)=>(setPassword(e.target.value))}  type="password" />
                        <label >Email ID</label>
                        <input id="email" onChange={(e)=>(setEmail(e.target.value))} type="email" />
                        {/* <p>{emailMessage}</p> */}
                        <label >Mobile Number</label>
                        <input id="number" onChange={(e)=>(setNumber(e.target.value))} type="number" />
                        {/* <p>{numberMessage}</p> */}
                    </form>
                </div>

                <div className="register_buttons">
                    <button className="register_button button" onClick={checkInputField}>Register</button>
                    <NavLink to="/login"><button className="login_button button">Login</button></NavLink>
                </div>
            </div>
        </div>
    )
}

export default Register;