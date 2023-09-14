const Login = () => {
  return (
    <div className="login">
      <div className="login-container">
        <div className="login-left">
          <h1>HAKKI<span>Media</span></h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam voluptate porro est unde explicabo. Eligendi.</p>
        </div>
        <div className="login-right">
          <h1>Login Space</h1>
          <form action="#">
            <input type="text" name='username' placeholder="username..." />
            <input type="password" name='password' placeholder="password..." />
            <button>Login</button>
            <span>Forgot password ?</span>
            <button>Register</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
