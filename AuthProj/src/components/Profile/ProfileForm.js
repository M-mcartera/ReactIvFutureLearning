import { useRef, useContext } from "react";
import classes from "./ProfileForm.module.css";
import AuthContext from "../../store/auth-context";

const ProfileForm = () => {
  const ctx = useContext(AuthContext);
  const passwordInput = useRef();
  const submitHandler = (event) => {
    event.preventDefault();
    const enteredPassword = passwordInput.current.value;

    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyAzX2g4nO2VumOXe5_E0JaPrJOaDeq2hDI",
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          idToken: ctx.token,
          password: enteredPassword,
          returnSecureToken: true,
        }),
      }
    ).then((res) => {
      if (res.ok) {
        return res.json((data) => {
          console.log(data);
        });
      } else {
        return res.json((data) => {
          console.log(data.error.message);
        });
      }
    });
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input type="password" id="new-password" ref={passwordInput} />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
};

export default ProfileForm;
