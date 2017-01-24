import React from 'react';
import Friend from 'Friend';

const FriendsGroup = ({
  status,
  showUsers,
  filteredFriends,
  favourites,
  toggleFavourite
}) => {
  return (
    <div>
      {showUsers && filteredFriends.length > 0 && <div>
        <h3>{ status ? 'Online' : 'Offline'} users</h3>
        {filteredFriends.map((friend, index) => <Friend
            key={index}
            friend={friend}
            isFavourite={favourites.indexOf(friend.id) !== -1}
            toggleFavourite={() => toggleFavourite(friend.id)}
          />
        )}
      </div>
      }

      {filteredFriends.length === 0 &&
        <div>
          No users found
        </div>
      }
    </div>
  )
};

export default FriendsGroup;
