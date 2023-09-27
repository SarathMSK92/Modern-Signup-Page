import classes from "./Signup.module.css";

function Signup() {
  return (
    <>
      <div className={classes.circle}> </div>

      <div className={classes.card}>
        <div className={classes.logo}>
          <i class="fa-solid fa-bitcoin-sign"></i>
        </div>

        <h2>Create Account</h2>
        <form className={classes.form}>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button type="submit">Sign Up</button>
        </form>

        <footer>
          Existing user, sign in <a href="#">Here</a>
        </footer>
      </div>
    </>
  );
}

export default Signup;
