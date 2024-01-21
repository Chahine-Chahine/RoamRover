import './LoginPage.css';
import signInImage from '../../assets/Signin.png';
import Form from '../../components/common/Form';
import Button from '../../components/common/Button';
import { Link } from 'react-router-dom';

const LoginPage = () =>{
  
  return(
    <div className="page">
      <div className="wrapper">
        <div className="left-side">
          <img className='image-signin' src={signInImage}/>
        </div>
        <div className="right-side">
          <h2 className='login-title'>Login</h2>
          <Form label="Email" type="email" name="email" placeholder="Email" />
          <Form label="Password" type="password" name="password" placeholder="Password" />
          <h4>Don`t have an account? <Link to="/signup">SignUp</Link></h4>
          <Button text="SignIn"/>
        </div>
      </div>
    </div>
  )
}

export default LoginPage;
