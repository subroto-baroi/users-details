import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Friend from '../Friend/Friend';

const Home = () => {
    const [friends, setFriends] = useState([]);
  useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data =>{
      setFriends(data)
      console.log(data)
    })
  }, []);
    return (
        <div>
            <h1 style={{textAlign: 'center', color: 'blue'}}>Total Friends :{friends.length}</h1>
            {
            friends.map(friend => <Friend friend={friend}></Friend>)
            }
        </div>
    );
};

export default Home;