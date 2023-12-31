import './AuthStyles.css'; 

export default function SignIn() {
  return (
  <>
      <h1>Sign In</h1>
    <div className="auth-container">
      <form className="auth-form">
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit">Sign In</button>
      </form>
    </div>
    </>
  );
}