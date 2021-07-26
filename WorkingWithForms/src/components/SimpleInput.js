
import useInput from "../hooks/useInput";

const SimpleInput = (props) => {
  const {
    value: nameValue,
    hasError: nameHasError,
    isValid: enteredNameIsValid,
    inputBlurHandler: nameBlurHandler,
    inputChangeHandler: nameChangeHandler,
    reset: nameInputReset,
  } = useInput((value) => value.trim() !== "");
  const {
    value: emailValue,
    hasError: emailHasError,
    isValid: enteredEmailIsValid,
    inputBlurHandler: emailBlurHandler,
    inputChangeHandler: emailChangeHandler,
    reset: emailInputReset,
  } = useInput((value) => value.includes("@"));


  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();



    if (!enteredNameIsValid) {
      return;
    }

    console.log(nameValue);

    // nameInputRef.current.value = ''; => NOT IDEAL, DON'T MANIPULATE THE DOM
    nameInputReset();

    emailInputReset();
  };

  const nameInputClasses = nameHasError
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = emailHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          value={nameValue}
        />
        {nameHasError && (
          <p className="error-text">Name must not be empty.</p>
        )}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">Your E-Mail</label>
        <input
          type="email"
          id="email"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={emailValue}
        />
        {emailHasError && (
          <p className="error-text">Please enter a valid email.</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
