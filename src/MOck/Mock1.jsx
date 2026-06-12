import React, { useEffect, useState } from "react";

const Mock1 = () => {
  const [input, setInput] = useState({
    username: " ",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input);
    setInput("");
  };
  const handleChange = (e) => {
    let { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          id="username"
          value={input}
          onChange={() => setInput(e.target.value)}
        />
        <button>Add</button>
      </form>
    </>
  );
};

export default Mock1;

