import React, { useState, useEffect } from "react";
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
    const [style, setStyle] = useState("")
    const [numberText, setNumberText] = useState(null)
    const navigate = useNavigate()

    // function checkInputField(){
    //     if(username !== '' &&number !== '' && email !=='' && password !== ''){
    //         submitData();
    //     }
    //     else{
    //         alert("Please Fill all the Fields")
    //     }
    // }

    
        
        const handleNumber = (e) =>{
            setNumber(e.target.value)
            // if(number.length > 10 || number.length < 10){
            //     setNumberText("Please Enter a valid number")
            // }
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
                        {password.includes('@') || password.includes('£') || password.includes('$') || password.includes('%') || password.trim() == "" ? <input id="password" onChange={(e)=>(setPassword(e.target.value))} type="password" /> :  <input id="password" style={{border:"1px solid red"}} onChange={(e)=>(setPassword(e.target.value))} type="password" />}
                        {password.includes('@') || password.includes('£') || password.includes('$') || password.includes('%') || password.trim() == ""  ? <p></p> : <p style={{fontSize:"10px"}}>Please use one of the special character (@, £, $, %)</p> }
                        <label >Email ID</label>
                        <input id="email" onChange={(e)=>(setEmail(e.target.value))} type="email" /> 
                        {/* {email.includes("@") ? <p></p> : <p style={{fontSize:"10px"}}>Email Id must include @</p>} */}
                        <label >Mobile Number</label>
                        {number.length === 10 || number.length === 0 ? <input id="number" onChange={(e)=>setNumber(e.target.value)} type="number" /> : <input id="number" style={{border:"1px solid red"}} onChange={(e)=>handleNumber(e)} type="number" />}
                        {number.length === 10 || number.length === 0 ? <p></p> :<p style={{fontSize:"10px"}}>Please Enter a valid number</p>}
                    </form>
                </div>

                <div className="register_buttons">
                    {((number.length == 10) && (username.trim() !== "") && (password.trim() !== "") && (email.trim() !== "") && (password.includes('@')) || (password.includes('£')) || (password.includes('$')) || (password.includes('%')) ) ? <button className="register_button button" onClick={submitData}>Register</button> : <button className="register_button button" disabled={true} >Register</button>}
                    <NavLink to="/login"><button className="login_button button">Login</button></NavLink>
                </div>
            </div>
        </div>
    )
}

export default Register;