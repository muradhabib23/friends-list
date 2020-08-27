import React from 'react';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import Friends from './Components/Friends/Friends';
import Addfriend from './Components/Addfriend/Addfriend';

function App() {
  const [users, setUsers] = useState([]);
  const [addFriend,setAddFriend] = useState([]);

  useEffect (()=>{
    fetch('https://randomuser.me/api/?results=15')
    .then(res => res.json())
    .then(data=>setUsers(data.results))
    .catch(error => console.log(error))
  }, [])

  const addFriendHandler = (user) => {
    const newUser = [...addFriend,user]
    setAddFriend(newUser);
  }
  return (
    <div className="App, App-header">
          <h2>Friends List: {users.length}</h2>
          <h3><Addfriend addFriend={addFriend}></Addfriend></h3>

      {
        users.map(user => <Friends user ={user} key={user.phone} addFriendHandler={addFriendHandler} ></Friends>)
      }

    </div>

  );
}

export default App;
