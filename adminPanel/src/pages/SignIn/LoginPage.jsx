import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './LoginPage.css';
import signInImage from '../../assets/Signin.png';
import Form from '../../components/common/Form';
import Button from '../../components/common/Button';
import { Link, useNavigate } from 'react-router-dom';
import { loginUser } from '../../core/redux/actions/authActions'; 

const LoginPage = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const authState = useSelector(state => state.auth); 
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(credentials.email, credentials.password));
  };

  // Example of how to handle changes in auth state
  useEffect(() => {
    if (authState.isLoggedIn && authState.user.role_id === 1) {
      navigate('/dashboard');
    } else if (authState.isLoggedIn) {
      setMessage('Unauthorized user');
    } else if (authState.error) {
      setMessage(authState.error);
    }
  }, [authState, navigate]);
  return (
    <div className="page">
      <div className="wrapper">
        <div className="left-side">
          <img className='image-signin' src={signInImage} alt="Sign In"/>
        </div>
        <div className="right-side">
          <h2 className='login-title'>Login</h2>
          <form onSubmit={handleSubmit}>
            <Form label="Email" type="email" name="email" placeholder="Email" value={credentials.email} onChange={handleChange} />
            <Form label="Password" type="password" name="password" placeholder="Password" value={credentials.password} onChange={handleChange} />
            <Button type="submit" text="SignIn"/>
          </form>
          {message && <p className="login-message">{message}</p>}
          <h4>Don`t have an account? <Link to="/signup">SignUp</Link></h4>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
