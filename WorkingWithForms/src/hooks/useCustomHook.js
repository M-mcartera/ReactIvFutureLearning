import { useState } from "react";
const useCustomHook = (validateFn) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [hasError, setHasError] = useState(false);


  const isValidValue = validateFn(enteredValue);
  const isInvalidValue = !isValidValue && hasError;


  const inputChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  }

  const inputBlurHandler = () => {
    setHasError(true);
  }

  const reset = () => {
    setEnteredValue("");
    setHasError(false);
  }
  return { 
    value: enteredValue,
    hasError: isInvalidValue,
    isValid: isValidValue,
    inputBlurHandler,
    inputChangeHandler,
    reset
  }
};

export default useCustomHook;
