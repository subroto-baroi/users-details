import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Friend = (props) => {
    const {name,id} =props.friend;
    // const history = useHistory();
    // const handleClick = (friendId) => {
    //     const url = `/friend/${friendId}`;
    //     history.push(url)
    // }
    const friendStyle ={
        border:'1px solid purple',
        margin:'30px 0px 20px 450px',
        padding:'15px',        
        borderRadius:'10px',
        backgroundColor:'#F5E1DA',
        width:'400px',
        height:'200px',
        textAlign:'center'       
    }
    return (
        <div style={friendStyle}>
            <h1>{name}</h1>           
             <Link to={`/friend/${id}`}>
            <button>Show detail of {id}</button>
            </Link> 
            
             {/* <button onClick={() => handleClick(id)}>Click me</button> 
             */}
        </div>
    );
};

export default Friend;