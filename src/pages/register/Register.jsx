const Register = () => {
  return (
    <div className="login">
      <div className="login-container register-container">

        <div className="login-right">
          <h1>Register Space</h1>
          <form action="#">
            <input type="text" name='username' placeholder="username..." />
            <input type="email" name='email' placeholder="email..." />
            <input type="password" name='password' placeholder="password..." />
            <input type="password" name='password' placeholder="password..." />
            <button>Register</button>
            <button>Login</button>
          </form>
        </div>
        <div className="login-left">
          <h1>HAKKI<span>Media</span></h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam voluptate porro est unde explicabo. Eligendi.</p>
        </div>
      </div>
    </div>
  )
}

export default Register
