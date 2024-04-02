import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


function Attendance() {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [signInDateTime, setSignInDateTime] = useState(null);
    const [sigInTime, setsigInTime] = useState(null)
    const [signOutTime, setsignOutTime] = useState(null);
    const [loggedInUser, setloggedInUser] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const currentDate = new Date();
        const day = currentDate.getDate();
        const month = currentDate.getMonth() + 1;
        const fullyear = currentDate.getFullYear();
        const hours = currentDate.getHours() - 12;
        const minutes = currentDate.getMinutes();
        const seconds = currentDate.getSeconds() + 1;

        function update(){
            setDate(`${day}-${month}-${fullyear}`);
            setTime(`${hours}:${minutes}:${seconds}`);
        }

        setTimeout(update, 1000)

        const storedSignInDateTime = JSON.parse(localStorage.getItem('signInDateTime'));
        setSignInDateTime(storedSignInDateTime);

        let loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"))
        setloggedInUser(loggedInUser)
    },[time],[date]);

    // sign IN
    const signIn = (timeGe) => {
        console.log(timeGe,"timeGet")
        const currentDate = new Date();
        const hours = currentDate.getHours() - 12;
        const minutes = currentDate.getMinutes();
        const seconds = currentDate.getSeconds() + 1;

        setsigInTime(timeGe)
        console.log(sigInTime,"signInTime")

        const signInDateTime = {
            date: date,
            time: time,
            signInTime: timeGe,
        };

        setSignInDateTime(signInDateTime);
        localStorage.setItem('signInDateTime', JSON.stringify([signInDateTime]));
    };

    // sign Out
    const signOut = (timeGet) => {
        const currentDate = new Date();
        const hours = currentDate.getHours() - 12;
        const minutes = currentDate.getMinutes();
        const seconds = currentDate.getSeconds() + 1;
        setsignOutTime(timeGet);
        console.log(signOutTime,"signOutTime");

        let dataGetLocalStorage = JSON.parse(localStorage.getItem("signInDateTime")) 
        console.log(dataGetLocalStorage,"dataGetLocalStorage")
        const x = dataGetLocalStorage?.map((i)=>{
            return {...i, signOutTime:time}
        })
        console.log(x,"store inside useEffect")
        
        localStorage.setItem('signInDateTime', JSON.stringify(x));
    };

    const viewReport = () => {
        navigate("/View_report")
    };

    return (
        <div className='register_heading'>
            <div className="heading">
                <h1 style={{marginBottom:"0px"}}>Welcome user {loggedInUser}</h1>
                <p style={{fontSize:"11px", margin:"-7px 10px 10px 10px", padding:"0px"}}>Please mark your attendance by clicking on Sign in button</p>
            </div>
            <div className='Register_container' style={{ padding: "30px 10px 10px 10px" }}>
                <div className='Register' style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <h4 className='dd' style={{ color: "red" }}>Current date : {date}</h4>
                    <h4 className='dd' style={{ color: "green" }}>Current time : {time}</h4>
                </div>
                <div className='register_buttons'>
                    {signInDateTime == null ? <button className='register_button button' onClick={()=>signIn(time)} >SIGN IN</button> : <button className='register_button button' onClick={()=>signOut(time)} >SIGN OUT</button>}
                    <button onClick={viewReport}>VIEW REPORT</button>
                </div>
            </div>
        </div>
    );
}

export default Attendance;
