import { useState } from "react";

const Heart = () => {
  const [likes, setLikes] = useState(0);
  
  const updateLikes = () => {
    // setLikes(likes + 1);
    //! Efficent update
    setLikes((prev) => prev + 1);
    setLikes((prev) => prev + 1);
    setLikes((prev) => prev + 1);
  };
  return (
    <>
      <h1>Like button</h1>
      <span onClick={updateLikes}>
        💖
        <sup>{likes}</sup>
      </span>
    </>
  );
};
export default Heart;
