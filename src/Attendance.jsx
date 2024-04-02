import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


function Attendance() {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [signInDateTime, setSignInDateTime] = useState(null);
    const [signInTime, setsignInTime] = useState("")
    const [signOutTime, setsignOutTime] = useState("");
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
    },[time],[date]);

    const signIn = (timeGet) => {
        const currentDate = new Date();
        const hours = currentDate.getHours() - 12;
        const minutes = currentDate.getMinutes();
        const seconds = currentDate.getSeconds() + 1;
        setsignInTime(`${hours}:${minutes}:${seconds}`)

        const signInDateTime = {
            date: date,
            time: time,
            signInTime: timeGet
        };

        setSignInDateTime(signInDateTime);
        localStorage.setItem('signInDateTime', JSON.stringify([signInDateTime]));
    };

    const signOut = (timeGet) => {
        const currentDate = new Date();
        const hours = currentDate.getHours() - 12;
        const minutes = currentDate.getMinutes();
        const seconds = currentDate.getSeconds() + 1;
        setsignOutTime(`${hours}:${minutes}:${seconds}`);

        const signInDateTime = {
            date: date,
            time: time,
            signInTime: signInTime,
            signOutTime: timeGet,
        };
        setSignInDateTime(signInDateTime);
        localStorage.setItem('signInDateTime', JSON.stringify([signInDateTime]));
        console.log(signInDateTime,"signInDateTime inside sign out")
    };

    const viewReport = () => {
        navigate("/View_report")
    };

    return (
        <div className='register_heading'>
            <div className="heading">
                <h1>Attendance Page</h1>
            </div>
            <div className='Register_container' style={{ padding: "30px 10px 10px 10px" }}>
                <div className='Register' style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <h4 className='dd' style={{ color: "red" }}>Current date : {date}</h4>
                    <h4 className='dd' style={{ color: "green" }}>Current time : {time}</h4>
                </div>
                <div className='register_buttons'>
                    {signInDateTime === null ? <button className='register_button button' onClick={()=>signIn(time)} >SIGN IN</button> : <button className='register_button button' onClick={()=>signOut(time)} >SIGN OUT</button>}
                    <button onClick={viewReport}>VIEW REPORT</button>
                </div>
            </div>
        </div>
    );
}

export default Attendance;
