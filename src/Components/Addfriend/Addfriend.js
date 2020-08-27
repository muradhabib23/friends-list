import React from 'react';

const Addfriend = (props) => {
    const addFriend = props.addFriend;

    return (
        <div>
            <h3>Friends Added</h3>
            <h4>Total Added: {addFriend.length}</h4>
        </div>
    );
};

export default Addfriend;