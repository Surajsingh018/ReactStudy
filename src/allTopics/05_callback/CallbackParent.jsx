import { useState } from "react";
import CallbackChild from "./CallbackChild";

const CallbackParent = () => {
  const [data, setData] = useState("");
  function getData(value) {
    console.log(value);
    setData(value);
  }
  return (
    <>
      <h1>learn callback in parent components:{data}</h1>
      <CallbackChild getData={getData} />
    </>
  );
};
export default CallbackParent;
