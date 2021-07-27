import React, { useRef, useState } from "react";

import classes from "./Checkout.module.css";

const isEmpty = (value) => {
  return value.trim() === "";
};

const Checkout = (props) => {
  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalInputRef = useRef();
  const cityInputRef = useRef();

  const [formValidity, setFormValidity] = useState({
    name: true,
    street: true,
    postal: true,
    city: true,
  });

  const confirmHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPostal = postalInputRef.current.value;
    const enteredCity = postalInputRef.current.value;

    const nameisValid = !isEmpty(enteredName);
    const streetisValid = !isEmpty(enteredStreet);
    const postalisValid = enteredPostal.length === 5;
    const cityisValid = !isEmpty(enteredCity);

    const formIsValid =
      nameisValid && streetisValid && postalisValid && cityisValid;

    setFormValidity({
      name: nameisValid,
      street: streetisValid,
      postal: postalisValid,
      city: cityisValid,
    });
    if (!formIsValid) {
      return;
    }
    props.onConfirm({
        name: enteredName, street: enteredStreet, postal: enteredPostal, city: enteredCity
    });
  };

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={classes.control}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameInputRef} />
        {!formValidity.name && <p>Please enter a valid name</p>}
      </div>
      <div className={classes.control}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetInputRef} />
        {!formValidity.street && <p>Please enter a valid street</p>}
      </div>
      <div className={classes.control}>
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" ref={postalInputRef} />
        {!formValidity.postal && <p>Please enter a valid postal code</p>}
      </div>
      <div className={classes.control}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityInputRef} />
        {!formValidity.city && <p>Please enter a valid city</p>}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
