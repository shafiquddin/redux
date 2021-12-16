import classes from "./Auth.module.css";
import { useDispatch } from "react-redux";
import { AuthActions } from "../store/Auth";
import { useRef, useState } from "react";

const Auth = () => {
  const [isInvalid, setIsinvalid] = useState(false);
  const emailRef = useRef();
  const passRef = useRef();
  const dispatch = useDispatch();
  const loginHandler = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const pass = passRef.current.value;
    if (email === "" && pass === "") {
      setIsinvalid(true);
    }
    if (email === "shafiquddin2k@gmail.com" && pass === "shafiq") {
      dispatch(AuthActions.login());
    } else {
      setIsinvalid(true);
    }
  };
  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={loginHandler}>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" ref={emailRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" ref={passRef} />
          </div>
          {isInvalid && <p>please enter valid credential</p>}
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
