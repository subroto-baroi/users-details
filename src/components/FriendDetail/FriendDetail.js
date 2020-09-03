import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';

const FriendDetail = () => {
    const {friendId} = useParams();
    const [friend, setFriend] = useState({});
    useEffect(() => {
        const url= `https://jsonplaceholder.typicode.com/users/${friendId}`
        fetch(url)
        .then(res => res.json())
        .then(data => setFriend (data))
    },[]);

    const friendStyle ={
        border:'1px solid purple',
        margin:'50px 0px 0px 450px',
        padding:'15px',
        borderRadius:'10px',
        backgroundColor:'#F5E',
        width:'400px',
        height:'250px',
        textAlign:'center'      
    }

    return (
        <div style={friendStyle}>
             <h4 style={{color:'white'}}>Friend Detail Of : {friendId} </h4>
             <h3>Name : {friend.name} </h3>
             <h4>Phone : {friend.phone} </h4>
             <h5>Website : {friend.website}</h5>
             <h6>Email : {friend.email}</h6>
        </div>
    );
};

export default FriendDetail;