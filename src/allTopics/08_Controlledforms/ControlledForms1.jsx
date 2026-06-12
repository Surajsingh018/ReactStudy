import { useState } from "react";

const ControlledForms1 = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [course, setCourse] = useState("");

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleCourse = (e) => {
    setCourse(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let newuser = { username, email, password,course };
    console.log(newuser);
  };
  return (
    <>
      <h1>Learn Controlled Form</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          id="username"
          value={username}
          onChange={handleUsername}
        />
        <br />
        <br />
        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          id="email"
          value={email}
          onChange={handleEmail}
        />
        <br />
        <br />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={handlePassword}
        />
        <br />
        <br />
        <label htmlFor="course">Select Course</label>
        <select name="course" id="course" value={course} onChange={handleCourse}>
          <option value="" disabled selected>
            Select here
          </option>
          <option value="Java Fullstack">Java Fullstack</option>
          <option value="Python Fullstack">Python Fullstack</option>
          <option value="Mern Fullstack">Mern Fullstack</option>
        </select>
        <br />
        <br />
        <button>Submit</button>
      </form>
    </>
  );
};
export default ControlledForms1;
