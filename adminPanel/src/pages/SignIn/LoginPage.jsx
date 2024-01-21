import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../core/redux/actions/authActions"; 
import "./LoginPage.css";
import signInImage from "../../assets/Signin.png";
import Form from "../../components/common/Form";
import Button from "../../components/common/Button";
import { Link, useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const authState = useSelector(state => state.auth); 
  const [message, setMessage] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.trim() || !password.trim()) {
        setMessage("Please fill in both email and password.");
        return;
    }

    // Ensure correct structure of credentials
    const credentials = { email, password };
    console.log('Login request data:', credentials); // Debug log

    dispatch(loginUser(credentials));
};


  // Redirect or show message based on auth state
  useEffect(() => {
    if (authState.isAuthenticated) {
      if (authState.user?.role_id === 1) {
        navigate("/dashboard");
      } else {
        setMessage("Unauthorized user");
      }
    } else if (authState.errorMessage) {
      setMessage(authState.errorMessage);
    }
  }, [authState, navigate]);

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
