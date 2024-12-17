import { useState } from 'react'
import './App.css'

import AddItem from './components/Additem.jsx';
import DelayMessage from './components/DealayMessage.jsx';
import ItemsList from './components/ItemList.jsx';
// import BtnLanguage from './components/BtnLanguage.jsx';
import BtnColor from './components/btnColor.jsx';
import Counter from './components/Counter.jsx';
import Greeting from './components/greeting.jsx'
import FetchData from './components/fetchData.jsx';
import PostList from './components/PostList.jsx';
import PostComp from './components/PostComp.jsx';
import Form from './components/FormComp.jsx';
import UserList from './components/UsersLisr.jsx';
import UserForm from './components/UserForm.jsx';
import Users from './components/Users.jsx';
import UserById from './components/UserById.jsx';
function App() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState('green');
  const [language, setLanguage] = useState('en');
  const[items,setItems] = useState(['Item 1', 'Item 2', 'Item 3'])

  // const items = ['Item 1', 'Item 2', 'Item 3'];
  return (
    <>
    {/* app1 */}
    {/* <Greeting name="Ori" fName="arbeli"/>  */}
    {/* <Counter count={count}  setCount={setCount}/>  */}
    {/* <BtnColor  color={color} setColor={setColor}/> */}
    {/* <BtnLanguage language={language} setLanguage={setLanguage}/> */}
    {/* <AddItem items={items} setItems={setItems}/> */}
    {/* <ItemsList items={items}/> */}
    {/* <DelayMessage /> */}
    {/* <FetchData/> */}
    {/* <PostList/> */}
    {/* <PostComp/> */}
    {/* <Form/> */}
    {/* <UserList/> */}
    {/* <UserForm/> */}
    <Users/>
    <UserById/>
    </>
  )
}

export default App
