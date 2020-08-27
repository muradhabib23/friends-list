import React from 'react';
import './Friends.css'

const Friends = (props) => {
    const {name, email, phone, picture} = props.user;
    const fullName = `${name.title} ${name.first} ${name.last}`;
    // const pictureStyle = {height:'50px'}
    const userStyle={
        height: '250px',
        width: '500px',
        color: "darkslategrey",
        backgroundColor: "#EFEFBB",
        margin: "10px",
        padding: "20px",
        display: "flex",
        borderRadius:"10px",
        boxShadow: "5px 5px 5px gray"
    }
    const handleAddFriend = props.handleAddFriend;

    return (
        <div style={userStyle}>
            <div className='user-image'>
                <img src={picture.large} alt=""/>
            </div>
            <div className='user-detail'>
                <h4>Name: {fullName}</h4>
                <p>Email: {email}</p>
                <p>Phone: {phone}</p>
                <button onClick={()=> handleAddFriend(props.user)}>Add Friend</button>
            </div>
        </div>
    );
};

export default Friends;