import React, { useState } from "react";
import LoginData from '../data/LoginInfo'
import { useNavigate } from "react-router-dom";

function Login() {
  
  const navigate = useNavigate()
  const data= LoginData;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPass, setErrorPass] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    let hasError = false;

    // Email validation
    if (email.trim() === "") {
      setErrorEmail(true);
      hasError = true;
    } else {
      setErrorEmail(false);
    }

    // Password validation
    if (password.trim() === "") {
      setErrorPass(true);
      hasError = true;
    } else {
      setErrorPass(false);
    }

    // Stop if validation failed
    if (hasError) {
      return;
    }

    loginAdmin();
    localStorageUser();
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);

    // Remove error while typing
    if (e.target.value.trim() !== "") {
      setErrorEmail(false);
    }
  };

  const handlePass = (e) => {
    setPassword(e.target.value);

    // Remove error while typing
    if (e.target.value.trim() !== "") {
      setErrorPass(false);
    }
  };

  //login data
  const loginAdmin = () =>{
    if (
    email === data.email &&
    password === data.password
  ) {
    navigate('/')
  } else {
    alert("Please check your email and password");
  }
  }

  //set the data in localStorage

  const localStorageUser = () =>{
    localStorage.setItem("user", JSON.stringify(data))
    const user = localStorage.getItem("user");
    console.log(user)
  }

  return (
    <div className="login-page">

      <div className="login-card">

        <div className="login-banner">
          <div className="banner-content">
            <h2>Build. Create. Grow.</h2>

            <p>
              Everything you need to manage your work,
              projects and productivity in one place.
            </p>

            <div className="stats">
              <div>
                <strong>10K+</strong>
                <span>Users</span>
              </div>

              <div>
                <strong>99%</strong>
                <span>Uptime</span>
              </div>
            </div>
          </div>
        </div>

        <div className="login-content">

          <h1>Welcome back 👋</h1>

          <p className="subtitle">
            Login to your account and continue your journey.
          </p>

          <form onSubmit={handleSubmit}>

            {/* Email */}
            <div className="form-group">

              <label htmlFor="email">
                Email Address
              </label>

              <input
                type="email"
                id="email"
                value={email}
                onChange={handleEmail}
                placeholder="Enter your email"
              />

              {errorEmail && (
                <p className="error">
                  Please enter your email
                </p>
              )}

            </div>

            {/* Password */}
            <div className="form-group">

              <div className="label-row">
                <label htmlFor="password">
                  Password
                </label>

                <a href="#">
                  Forgot password?
                </a>
              </div>

              <input
                type="password"
                id="password"
                value={password}
                onChange={handlePass}
                placeholder="Enter your password"
              />

              {errorPass && (
                <p className="error">
                  Please enter your password
                </p>
              )}

            </div>

            {/* Remember */}
            <div className="remember">
              <label>
                <input type="checkbox" />
                <span>Remember me</span>
              </label>
            </div>

            <button
              type="submit"
              className="login-btn"
            >
              Sign In
            </button>

          </form>

          <div className="divider">
            <span>OR</span>
          </div>

          <button className="google-btn">
            <span className="google-icon">G</span>
            Continue with Google
          </button>

          <p className="signup">
            Don't have an account?
            <a href="#"> Create account</a>
          </p>

        </div>

      </div>

    </div>
  );
}

export default Login;