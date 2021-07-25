import React, {useState} from "react";
import "./index.css";

export default function App() {
  const [values, setValues]=useState({
    firstName:"",
    lastName:"",
    email:"",
  });

  const [submitted ,setSubmit]=useState(false);
  const [valid, setValid]=useState(false);

   {/*For first name*/ }
  const handelFirstNameInputChange=(event)=>{

    setValues({...values, firstName: event.target.value})
  }
{/*For last name*/ } 
  const handellastNameInputChange=(event)=>{
     setValues({...values, lastName: event.target.value})
  }
  {/*For first name*/ }
  const handelemailInputChange=(event)=>{
    setValues({
      ...values, email: event.target.value
    })
  }

  const handleSubmit=(event)=>{
    event.preventDefault();
    if(values.firstName && values.lastName && values.email){
      setValid(true);
    }
    setSubmit(true);
  }


  return (
    <div class="form-container">
      <form class="register-form" onSubmit={handleSubmit}>
        {/* Uncomment the next line to show the success message */}
        {submitted && valid?<div class="success-message">Success! Thank you for registering</div> :null}
        <input
        onChange={handelFirstNameInputChange}
         value={values.firstName}
          id="first-name"
          class="form-field"
          type="text"
          placeholder="First Name"
          name="firstName"
        />
        {/* Uncomment the next line to show the error message */}
        {submitted && !values.firstName ?<span>Please enter a first name</span>:null }
        <input
        onChange={handellastNameInputChange}
         value={values.lastName}
          id="last-name"
          class="form-field"
          type="text"
          placeholder="Last Name"
          name="lastName"
        />
        {/* Uncomment the next line to show the error message */}
        {submitted && !values.lastName ?<span>Please enter a first name</span>:null }
        <input
        onChange={handelemailInputChange}
          value={values.email}
          id="email"
          class="form-field"
          type="text"
          placeholder="Email"
          name="email"
        />
        {/* Uncomment the next line to show the error message */}
         {submitted && !values.email ?<span>Please enter a first name</span>:null }
        <button class="form-field" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}
