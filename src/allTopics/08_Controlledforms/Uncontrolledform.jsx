import React, { useRef } from 'react'

const Uncontrolledform = () => {
  const usernameRef=useRef()
  const emailRef = useRef()
  const handlesubmit =(e)=>{
    e.preventDefault()
    const username = usernameRef.current.value;
    const email = emailRef.current.value;
    console.log(username, email);
    
  }
  return (
    <div>
      <form onSubmit={handlesubmit}>
        <input ref={usernameRef} type ="text" name="username" id='username' placeholder='Enter User name'/>
      <input ref={emailRef} name="email" id="email" type='email' placeholder='enter email'/>
      <button type='submit'>submit</button>
      </form>
      
    </div>
  )
}

export default Uncontrolledform
