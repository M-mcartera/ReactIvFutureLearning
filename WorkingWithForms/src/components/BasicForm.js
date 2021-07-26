import useCustomHook from "../hooks/useCustomHook";

const BasicForm = (props) => {
  const {
    value: nameValue,
    hasError: nameHasError,
    isValid: nameIsValid,
    inputBlurHandler: nameBlurHandler,
    inputChangeHandler: nameChangeHandler,
    reset: resetNameHanlder,
  } = useCustomHook((value) => value.trim() !== "");

  const {
    value: lnameValue,
    hasError: lnameHasError,
    isValid: lnameIsValid,
    inputBlurHandler: lnameBlurHandler,
    inputChangeHandler: lnameChangeHanlder,
    reset: resetlNameHandler,
  } = useCustomHook((value) => value.trim() !== "");

  const {
    value: emailValue,
    hasError: emailHasError,
    isValid: emailIsValid,
    inputChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailHandler,
  } = useCustomHook((value) => value.includes("@"));

  let formIsValid = false;

  if (nameIsValid && lnameIsValid && emailIsValid) {
    formIsValid = true;
  }
  const nameClass = nameHasError ? "form-control invalid" : "form-control";
  const lnameClass = lnameHasError ? "form-control invalid" : "form-control";
  const emailClass = emailHasError ? "form-control invalid" : "form-control";

  const submitFormHandler = (event) => {
    event.preventDefault();
    console.log(nameValue);
    resetNameHanlder();
    resetlNameHandler();
    resetEmailHandler();
  };

  return (
    <form onSubmit={submitFormHandler}>
      <div className="control-group">
        <div className={nameClass}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
            value={nameValue}
          />
          {nameHasError && <p className="error-text">Name is invalid</p>}
        </div>
        <div className={lnameClass}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            onChange={lnameChangeHanlder}
            onBlur={lnameBlurHandler}
            value={lnameValue}
          />
          {lnameHasError && <p className="error-text">Lname is invalid</p>}
        </div>
      </div>
      <div className={emailClass}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          value={emailValue}
          onBlur={emailBlurHandler}
          onChange={emailChangeHandler}
        />
        {emailHasError && <p className="error-text">Email must be valid</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
