import React from 'react';
import './Login.css';

function Login() {
  return (
    <div className="login">
      <div className="login__logo">
        {/* Facebook logo */}
      </div>
      <div className="login__container">
        <h1>Welcome to Facebook</h1>
        <button>Login with Facebook</button>
      </div>
    </div>
  );
}

export default Login;
