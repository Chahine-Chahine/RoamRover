import '../SignIn/LoginPage.css';
import signInImage from '../../assets/Signin.png';
import Form from '../../components/common/Form';
import Button from '../../components/common/Button';
import { Link } from 'react-router-dom';

const SignupPage = () => {
  
  return (
    <div className="page">
      <div className="wrapper">
        <div className="left-side">
          <img className='image-signin' src={signInImage} alt="Sign In" />
        </div>
        <div className="right-side">
          <h2 className='login-title'>SignUp</h2>
          <Form label="Username" type="text" name="username" placeholder="Username" />
          <Form label="First Name" type="text" name="firstName" placeholder="First Name" />
          <Form label="Last Name" type="text" name="lastName" placeholder="Last Name" />
          <Form label="Email" type="email" name="email" placeholder="Email" />
          <Form label="Password" type="password" name="password" placeholder="Password" />
          <h4>Already have an account? <Link to="/">SignIn</Link></h4>
          <Button text="SignUp"/>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;
