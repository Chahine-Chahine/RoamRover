import { useState } from "react";
import axios from "axios";
import "./LoginPage.css";
import signInImage from "../../assets/Signin.png";
import Form from "../../components/common/Form";
import Button from "../../components/common/Button";
import { Link, useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    console.log("Email updated:", e.target.value); 
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    console.log("Password updated:", e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting:", { email, password }); 

    if (!email.trim() || !password.trim()) {
      setMessage("Please fill in both email and password.");
      return;
    }

    try {
      const response = await axios.post("http://127.0.0.1:8000/api/login", {
        email,
        password,
      });
      const { status, user, authorisation } = response.data;

      if (status === "success" && authorisation && authorisation.token) {
        localStorage.setItem("userToken", authorisation.token);
        if (user.role_id === 1) {
          navigate("/dashboard");
        } else {
          setMessage("Unauthorized user"); 
        }
      } else {
        setMessage("Login failed. Please try again.");
      }
    } catch (error) {
      if (error.response && error.response.data.message) {
        setMessage(error.response.data.message);
      } else {
        setMessage("Login failed. Please try again later.");
      }
    }
  };

  return (
    <div className="page">
      <div className="wrapper">
        <div className="left-side">
          <img className="image-signin" src={signInImage} alt="Sign In" />
        </div>
        <div className="right-side">
          <h2 className="login-title">Login</h2>
          <form onSubmit={handleSubmit}>
            <Form
              label="Email"
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
            />
            <Form
              label="Password"
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
            />

            <Button type="submit" text="SignIn" />
          </form>
          {message && <p className="login-message">{message}</p>}
          <h4>
            Don’t have an account? <Link to="/signup">SignUp</Link>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
