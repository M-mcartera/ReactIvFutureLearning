import { useState } from "react";

const useInput = (validateValueFn) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validateValueFn(enteredValue);
  const hasError = !valueIsValid && isTouched;

  const inputBlurHandler = (event) => {
    setIsTouched(true);
  };
  const inputChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };
  const reset = () => {
    setEnteredValue('');
    setIsTouched(false);
  }
  return {
    value: enteredValue,
    hasError,
    isValid: valueIsValid,
    inputBlurHandler,
    inputChangeHandler,
    reset,
  };
};

export default useInput;
