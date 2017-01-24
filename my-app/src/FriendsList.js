import React, {Component} from 'react';
import FriendsGroup from 'FriendsGroup';
import Toggle from 'Toggle';
import Input from 'Input';
import Counter from 'Counter';

class FriendsList extends Component {
  state = {
    showOfflineUsers: false,
    searchText: '',
    favourites: [1, 2]
  }

  toggleOfflineUsers = () => {
    const currentValue = this.state.showOfflineUsers;
    this.setState({showOfflineUsers: !currentValue});
  }

  onSearchChange = e => {
    this.setState({searchText: e.target.value});
  }

  toggleFavourite = (friendId) => {
    const favourites = this.state.favourites;
    const indexOfFriend = favourites.indexOf(friendId);

    let updatedArray;

    if (indexOfFriend === -1) {
      updatedArray = [...favourites, friendId];
    } else {
      updatedArray = favourites.filter((favourite, index) => index !== indexOfFriend);
    }

    this.setState({favourites: updatedArray})
  }

  // TODO
  filterByName = () => {

  }

  render() {
    const {friends} = this.props;
    const {showOfflineUsers, searchText, favourites} = this.state;

    const onlineUsers = [];
    const offlineUsers = [];

    friends.forEach(friend => {
      if (friend.isOnline) {
        onlineUsers.push(friend);
      } else {
        offlineUsers.push(friend);
      }
    });

    const filteredFriends = friends.filter(friend =>
      friend.name.indexOf(searchText) !== -1 ||
      friend.surname.indexOf(searchText) !== -1);
    const onlineFilteredFriends = filteredFriends.filter(friend => friend.isOnline);
    const offlineFilteredFriends = filteredFriends.filter(friend => !friend.isOnline);

    const count = onlineFilteredFriends.length +
                (showOfflineUsers ? offlineFilteredFriends.length : 0);
    const total = showOfflineUsers ? friends.length : onlineUsers.length;

    return (
      <div>
        <Toggle
          isActive={showOfflineUsers}
          toggleActive={this.toggleOfflineUsers}
        />

        <br/>

        <Input
          searchText={searchText}
          onSearchChange={this.onSearchChange}
        />

        <Counter
          count={count}
          total={total}
        />

        <FriendsGroup
          status={true}
          showUsers={true}
          filteredFriends={onlineFilteredFriends}
          favourites={favourites}
          toggleFavourite={this.toggleFavourite}
        />

        <FriendsGroup
          status={false}
          showUsers={showOfflineUsers}
          filteredFriends={offlineFilteredFriends}
          favourites={favourites}
          toggleFavourite={this.toggleFavourite}
        />

        {offlineFilteredFriends.length === 0 &&
          onlineFilteredFriends.length === 0 &&
          <div>
            No users found
          </div>
        }
      </div>
    )
  }
};

export default FriendsList;
