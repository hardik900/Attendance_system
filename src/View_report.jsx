import React, { useEffect, useState } from 'react';

function View_report() {
    const [signInDate, setsignInDate] = useState(" ");
    const [signInTime, setsignInTime] = useState(" ");
    const [signOutTime, setsignOutTime] = useState(" ");
    const [signInDateTime, setsignInDateTime] = useState();

    useEffect(() => {
        let signInDateTime = JSON.parse(localStorage.getItem("signInDateTime"));
        console.log(signInDateTime, "signInDateTime")
        setsignInDateTime(signInDateTime)
        // const signinTime = JSON.parse(localStorage.getItem("signInTime"));
        //const signOutTime = JSON.parse(localStorage.getItem("signInDateTime"));
       // console.log(signOutTime, "signOutTime");

        // setsignInDate(signInDateTime.date);
        // setsignInTime(signInDateTime.time);
        // setsignOutTime(signInDateTime.signOutTime);
    }, []);

    return (
        <div className='register_heading'>
        <div className="heading">
            <h1>Attendance Report </h1>
        </div>
        <div className='Register_container'>
            <div className='Register'>
                {
                    signInDateTime?.map((i)=>{
                        return(
                            <table style={{textAlign:"center", width:"100%"}}>
                                <tr style={{border:"1px solid black", padding:"15px"}}>
                                    <th>Date</th>
                                    <th>Sign In Time</th>
                                    <th>Sign Out Time</th>
                                </tr>
                                <tr style={{border:"1px solid black"}}>
                                    <td>{i.date}</td>
                                    <td>{i.signInTime}</td>
                                    <td>{i.signOutTime}</td>
                                </tr>
                                {/* <p >{i.date}</p>
                                <p >Sign in {i.signInTime}</p>
                                <p >Sign out {i.signOutTime}</p> */}
                            </table>
                        )
                    })
                }


            </div>
            {/* <div className='register_buttons'>
                <NavLink to="/"><button className="register_button button">Register</button></NavLink>
                <button type="submit" onClick={handleSubmit} >Log In</button>
            </div> */}
        </div>
</div>
    );
}

export default View_report;
