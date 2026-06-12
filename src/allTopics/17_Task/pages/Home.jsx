import { useContext } from "react";
import Navbar from "../componets/Navbar";
import { usercontext } from "../context/UserContextProvider";

const Home = () => {
  const { user } = useContext(usercontext);
  console.log(user);
  
  return (
    <div>
      <Navbar />
      <h2 style={{ padding: "20px", textAlign: "center" }}>Home Page</h2>
      {user && (
        <>
          <p style={{ padding: "10px", textAlign: "center", color: "gray" }}>
            Welcome {user.username}
          </p>
        </>
      )}
    </div>
  );
};

export default Home;
