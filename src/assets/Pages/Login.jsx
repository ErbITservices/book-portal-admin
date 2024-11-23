import { Link, useNavigate } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Button from "@mui/material/Button";
import { useState } from "react";
import { userRequest } from "../../axiosReqMethods";

function Login() {
  const [userdata, setuserdata] = useState({
    email: "",
    password: "",
  });

  const navigator = useNavigate();
  function handleinput(e) {
    const name = e.target.name;
    const value = e.target.value;

    setuserdata({
      ...userdata,
      [name]: value,
    });
    console.log(userdata);
  }
  async function handlesubmit() {
    try {
      

      if (userdata.email === "mihir@gmail.com" && userdata.password === "123456") {
        setuserdata({
          email: "",
          password: "",
        });

        
        localStorage.setItem("bookportellogin", "true");
        navigator("/Dashboard");
      }
      else{
        
      alert("Email or Password Invalid");
      }
    } catch (e) {
      alert("Email or Password Invalid");
    }
  }
  return (
    <>
      <div className="background">
        {/* <Navbar /> */}
        <div className="container">
          <div className="login-container">
            <h1>
              {" "}
              Welcome Back, <br /> Sign In
            </h1>
            <label>Email Address</label>
            <input
              className="input"
              type="text"
              placeholder="book@example.com"
              name="email"
              onChange={handleinput}
              value={userdata.email}
            />
            <label>Password</label>
            <input
              className="input"
              type="password"
              placeholder="Book@123"
              name="password"
              onChange={handleinput}
              value={userdata.password}
            />
            <button type="submit" className="btn" onClick={handlesubmit}>
              Sign In
            </button>

            <Link to="/Registration">
              <p>Sign Up</p>
            </Link>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}
export default Login;
