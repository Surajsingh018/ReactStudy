const CallbackChild = (props) => {
  console.log(props);
  let { getData } = props;
  let data = "Hello World";

  return (
    <>
      <h1>learn callback in child components:</h1>
      <button onClick={() => getData(data)}>Click</button>
    </>
  );
};
export default CallbackChild;
