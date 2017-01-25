import React from 'react';
import Friend from 'Friend';

const FriendsGroup = ({
  status,
  friends,
  toggleFavourite
}) => {
  return (
    <div>
      {friends.length > 0 && <div>
        <h3>{ status ? 'Online' : 'Offline'} users</h3>
        {friends.map((friend, index) => <Friend
            key={index}
            friend={friend}
            toggleFavourite={() => toggleFavourite(friend.id)}
          />
        )}
      </div>
      }
    </div>
  )
};

export default FriendsGroup;
