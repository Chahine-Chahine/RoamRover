import './LoginPage.css';
import signInImage from '../../assets/Signin.png';
import Form from '../../components/common/Form';

const LoginPage = () =>{
  
  return(
    <div className="login-page">
      <div className="wrapper">
        <div className="left-side">
          <img className='image-signin' src={signInImage}/>
        </div>
        <div className="right-side">
          <h2 className='login-title'>Login</h2>
          <Form label="Email" type="email" name="email" placeholder="Email" className="form-field input"/>
          <Form label="Password" type="password" name="password" placeholder="Password"  className="form-field input"/>
          <h4>Don`t have an account? <a href=''>SignUp</a></h4>
        </div>
      </div>
    </div>
  )
}

export default LoginPage;
