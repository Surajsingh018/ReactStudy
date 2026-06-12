const Child1 = (props)=>{
  console.log(props);
  
  return (
    <>
    <h1>Child Componets</h1>
    <p>{props.prop1}</p>
    <p>{props.props2}</p>
    <p>{props.props3.name}</p>
    <p>{props.props3.age}</p>
    </>
  )
}
export default Child1;