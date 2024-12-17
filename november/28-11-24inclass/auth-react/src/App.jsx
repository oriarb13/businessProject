import './App.css'
import { useSelector } from 'react-redux' 
import Cookies from "js-cookie";
import axios from 'axios'

// import components
import Signin from './components/Signin'
import Signup from './components/SIgnup'
import { useEffect } from 'react'

function App() {
  useEffect(() => {
    // console.log(Cookies.get("jwt"));
  }, []);
  
  async function handleFetch() {
    const jwt = Cookies.get("jwt");
    const { data } = await axios.get('http://localhost:3000/users/get-self', {
      headers: {
        Authorization: `Bearer ${jwt}`,
      }
    })

    console.log(data);
  }

  const user = useSelector((state) => state.user);
  
  return (
      <div>
        <h1>Redux and auth and jwt</h1>
        <div>
          <Signin />
          <Signup />
        </div>
        <button onClick={handleFetch}>Fetch User</button>
        <h1> {user.email} </h1>
      </div>
  )
}

export default App
