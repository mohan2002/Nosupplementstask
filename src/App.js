import { useEffect, useState } from 'react';
import './App.css';
import Maincomponent from './Components/Maincomponent';
import Spinner from "react-spinkit"


function App() {
  const[loading,setLoading] = useState(false)
  
  useEffect(() =>{
    setLoading(true)
    setTimeout(() =>{
          setLoading(false)
      },4000)
  },[])

  const [Users,setUsers] = useState([]);
  

  function deleteUser(id){
    setUsers(Users.filter(user => user.id !== id))
  }


  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  },[1])

  return (
    <div className={loading ? "App header" : "App"}>
          {loading ? <Spinner name="three-bounce" fadeIn/> : <Maincomponent Users={Users} deleteUser={deleteUser}/>}
          
    </div>
  );
}

export default App;
