import React, { useContext } from "react";
import { usercontext } from "../context/UserContextProvider";
import { BiSolidCaretUpSquare } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const { user, setUser } = useContext(usercontext);
  console.log(user);
  const navigate = useNavigate();
 
  const logout = () => {
    if (confirm("Are you sure ?")) {
      localStorage.removeItem("user");
      setUser(null);
      navigate("/");
    }
  };

  return (
    <div>
      <header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "10px",
        }}
      >
        <div>Context Task</div>
        <nav style={{ display: "flex", gap: "30px" }}>
          {user && (
            <>
              <span>{user.email}</span>
              <button onClick={logout}>Log Out</button>
            </>
          )}
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
