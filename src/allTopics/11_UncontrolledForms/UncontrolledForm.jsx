import { useRef } from "react";

const UncontrolledForm = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted");

    const newUser = {
      email: emailRef.current.value,
      password: passwordRef.current.value,

    };
    console.log(newUser);
    emailRef.current.value = "";
    passwordRef.current.value = "";
  };
  return (
    <>
      <h1>Learn Uncontrrolled form</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="eamil"
          id="email"
          placeholder="Enter your email..."
          ref={emailRef}
        />
        <br />
        <br />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password..."
          ref={passwordRef}
        />
        <br />
        <br />
        <button>Submit</button>
      </form>
    </>
  );
};

export default UncontrolledForm;
