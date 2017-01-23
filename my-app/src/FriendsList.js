import React from 'react';
import Friend from 'Friend';

const FriendsList = ({friends}) => {
  return (
    <div>
      {friends.map((friend, index) => {
          return friend.isOnline ? <Friend
            key={index}
            friend={friend}
          /> : null;
        }
      )}
    </div>
  )
};

export default FriendsList;
