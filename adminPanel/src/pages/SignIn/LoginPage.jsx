import './LoginPage.css';
import signInImage from '../../assets/Signin.png';

const LoginPage = () =>{
  
  return(
    <div className="login-page">
      <div className="wrapper">
        <div className="left-side">
          <img className='image-signin' src={signInImage}/>
        </div>
        <div className="right-side"></div>
      </div>
    </div>
  )
}

export default LoginPage;
