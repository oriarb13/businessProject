import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
const SignIn = () => {
    const [email , setEmail]=useState("")
    const [emailSub,setEmailSub]=useState("")
    const [btnText,setBtnText]=useState("submit")
    const [passType,setPassType]=useState(false)

    const passwordRef = useRef()

    const navigate = useNavigate()

  const handleForm = (e) => {
    e.preventDefault();
    console.log(email);
    console.log(passwordRef.current.value);
    setBtnText("loading...")
    
    setTimeout(() => {
        alert("sign in")
        setBtnText("submit")
        setTimeout(() => {
            // navigate("/")
        }, 1000);
        setPassType("text")
    }, 1000);
    
    setEmailSub(email)
    email=""
  };
  return (
    <div>
      <h1>sign in</h1>

      <form onSubmit={handleForm}>
        <label htmlFor="email">email:</label>
        <input onChange={(e)=>setEmail(e.target.value)} 
        value={email} 
        type="text" id="email" name="email" placeholder="enter " />

        <label htmlFor="password">password:</label>
        <input ref={passwordRef} type={passType? "text" : "password"} id="password" name="password" placeholder="enter " />

      <button type="submit">{btnText}</button>
      </form>
    </div>
  );
};

export default SignIn;
