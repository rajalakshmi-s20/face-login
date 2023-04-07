import React, { useEffect } from "react";
import "./App.css";

function App() {

  let faceio;
  useEffect(() => {
      //eslint-disable-next-line
      faceio = new faceIO("fioaa11d");
  }, [])

  const handleSignUp = async () => {
    try {
      let response = await faceio.enroll({
        locale: "auto",
        payload: {
          email: "example@gmail.com",
          pin: "12345",
        },
      });

      console.log(` Unique Facial ID: ${response.facialId}
      Enrollment Date: ${response.timestamp}
      Gender: ${response.details.gender}
      Age Approximation: ${response.details.age}`);
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogIn = async () => {
    try {
      let response = await faceio.authenticate({
        locale: "auto",
      });

      console.log(` Unique Facial ID: ${response.facialId}
          PayLoad: ${response.payload}
          `);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="homepage">
      <div className="card">
        <br/>
        <h1 className="title">Face Authentication</h1>
        <br/><br/>
        <h3 className="msg">Welcome to our website! I am so glad <span> you decided </span> to try out our website.</h3>
        <button className="signup" onClick={handleSignUp}>SIGN UP</button>
        <button className="login" onClick={handleLogIn}>LOGIN</button>
      </div>
    </div>
  );
}

export default App;