import React, { useState } from 'react'

function Login() {
  const[email,setEmail]= useState("");
  const[password,setPassword]= useState("");
   const[errorEmail,setErrorEmail]= useState(false);
const[errorpass,setErrorPass]= useState(false);
  const handleSubmit = (e) =>{
    e.preventDefault();
    if(email === "" || password === ""){
      setErrorEmail(true)
      return;
    }

    alert('success')

  }

  const handleEmail = (e)=>{
     
    if(email === ""){
      setErrorEmail(true);
    }    
    else{
setEmail(e.target.value);
    setErrorEmail(false);
    }
    

  }
  const handlePass = (e)=>{
    setPassword(e.target.value);
  }
return (
<div class="login-page">

  <div class="login-card">
 <div class="login-banner">

      <div class="banner-content">

        <h2>Build. Create. Grow.</h2>

        <p>
          Everything you need to manage your work,
          projects and productivity in one place.
        </p>

        <div class="stats">

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
    <div class="login-content">

      {/* <div class="logo">Logo</div> */}

      <h1>Welcome back 👋</h1>
      <p class="subtitle">
        Login to your account and continue your journey.
      </p>

      <form>

        <div class="form-group">
          <label for="email">Email Address</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e)=>handleEmail(e)}
            placeholder="Enter your email"
          />
         {errorEmail &&  <p>Please Enter Email</p>}
        </div>

        <div class="form-group">

          <div class="label-row">
            <label for="password">Password</label>
            <a href="#">Forgot password?</a>
          </div>

          <input
            type="password"
            id="password"
            onChange={(e)=>handlePass(e)}
            value={password}
            placeholder="Enter your password"
          />
         {errorpass && <p>Please Enter Password</p>}

        </div>

        <div class="remember">
          <label>
            <input type="checkbox" />
            <span>Remember me</span>
          </label>
        </div>

        <button class="login-btn" onClick={(e)=>handleSubmit (e)}>
          Sign In
        </button>

      </form>

      <div class="divider">
        <span>OR</span>
      </div>

      <button class="google-btn">
        <span class="google-icon">G</span>
        Continue with Google
      </button>

      <p class="signup">
        Don't have an account?
        <a href="#">Create account</a>
      </p>

    </div>

   

  </div>

</div>
)
}

export default Login



