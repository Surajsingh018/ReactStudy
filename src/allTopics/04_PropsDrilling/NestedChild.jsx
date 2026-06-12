const NestedChild = (props) => {
  console.log(props);

  let { str, arr, obj, greet } = props.props;

  return (
    <>
      <h1>Hello NEstedChild</h1>
      <h2>{str}</h2>
      <p>{obj.username}</p>
       {/* //! in object destructring we can also destructure internal property */}
      <p>{arr}</p>
      <button onClick={greet}>Click</button>
      
    </>
  );
};
export default NestedChild;
