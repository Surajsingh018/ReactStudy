import NestedChild from "./NestedChild"

const Child =(props)=>{
  console.log(props);
  
  return(
    <>
    <h1>Hello props drilling child</h1>
    <NestedChild props={props}/>
    </>
  )
}
export default Child