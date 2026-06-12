import { useState , useContext} from "react";
import { useNavigate } from "react-router-dom";
import {usercontext }from "../context/UserContextProvider";

const Login = () => {
  const [formdata, setFormdata] = useState({
    email: "",
    password: "",
    username : "",
  });
  const navigate = useNavigate();
  const {setUser} = useContext(usercontext)

  const handleChange = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formdata);


    const data = {
      username : formdata.username,
      email: formdata.email,
    };
    setUser(data);
    localStorage.setItem("user", JSON.stringify(data));
    navigate("/home")
    
  };
  return (
    <>
      <h3>Login </h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name"></label>
        <input type="text" name="username" id="username" placeholder="John Doe" value={formdata.username} onChange={handleChange}/>
        <br/>
        <br/>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="john@exmaple.com"
          value={formdata.email}
          onChange={handleChange}
        />
        <br />
        <br />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="**********"
          value={formdata.password}
          onChange={handleChange}
        />
        <br />
        <br />
        <button>Login</button>
      </form>
    </>
  );
};
export default Login;
