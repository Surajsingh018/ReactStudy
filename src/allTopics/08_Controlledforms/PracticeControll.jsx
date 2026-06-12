import { useState } from "react";

const PracticeControll = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [checkbox, SetCheckbox] = useState([]);
  const [number, setNumber] = useState("");

  const handleCheck = (e) => {
  const { value, checked } = e.target;

  if (checked) {
    setCheckbox([...checkbox, value]);
  } else {
    setCheckbox(checkbox.filter((item) => item !== value));
  }
};

  const handleSubmit = (e) => {
    e.preventDefault();
    let newuser = { username, email, password, gender, checkbox, number };
    console.log(newuser);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <br />
        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <br />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <br />
        <label>Gender</label>
        <input
          type="radio"
          name="gender"
          id="male"
          value={"male"}
          onChange={(e) => setGender(e.target.value)}
        />
        <label htmlFor="male">Male</label>
          <input
          type="radio"
          name="gender"
          id="female"
          value={"female"}
          onChange={(e) => setGender(e.target.value)}
        />
        <label htmlFor="female">Female</label>
        <br />
        <br />
        <label>Hobbies</label>
        <input
          type="checkbox"
          name="checkbox"
          id="cricket"
          value={"cricket"}
          onChange={(e) => SetCheckbox(e.target.value)}
        />
        <label htmlFor="cricket">Cricket</label>
        <input
          type="checkbox"
          name="checkbox"
          id="drive"
          value={"drive"}
          onChange={(e) => SetCheckbox(e.target.value)}
        />
        <label htmlFor="drive">Drive</label>
        <input
          type="checkbox"
          name="checkbox"
          id="Singing"
          value={"Singing"}
          onChange={(e) => SetCheckbox(e.target.value)}
        />
        <label htmlFor="singing">Singing</label>
        <input
          type="checkbox"
          name="checkbox"
          id="football"
          value={"football"}
          onChange={handleCheck}
        />
        <label htmlFor="football">Football</label>
        <br />
        <br />
        <label htmlFor="number">Number</label>
        <input
          type="number"
          name="number"
          id="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <br />
        <br />
        <button>Submit</button>
      </form>
    </>
  );
};
export default PracticeControll;
