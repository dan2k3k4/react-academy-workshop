import React from 'react';
import friends from 'friends.json';
import FriendsList from 'FriendsList';

const App = () => {
  return (
    <div>
      <b>Friend List</b>
      <hr/>
      <FriendsList friends={friends}/>
    </div>
  )
};

export default App;
