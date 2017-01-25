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

  getFriendById = (friendId) => {
    const friends = this.props.friends;
    let targetFriend;

    friends.forEach(friend => {
      if (friend.id === friendId) {
        targetFriend = friend;
      }
    });

    return targetFriend;
  }

  toggleFavourite = (friendId) => {
    const favourites = this.state.favourites;
    const indexOfFriend = favourites.indexOf(friendId);

    // TODO refactor this code
    let friendUpdate = this.getFriendById(friendId);
    if (friendUpdate) {
      friendUpdate.isFavourite = !friendUpdate.isFavourite;
    }

    let updatedArray;
    if (indexOfFriend === -1) {
      updatedArray = [...favourites, friendId];
    } else {
      updatedArray = favourites.filter(
        (favourite, index) => index !== indexOfFriend
      );
    }
    this.setState({favourites: updatedArray});
  }

  getOnlineUsers = () => {
    const friends = this.props.friends;

    let onlineUsers = [];

    friends.forEach(friend => {
      if (friend.isOnline) {
        onlineUsers.push(friend)
      }
    });

    return onlineUsers;
  }

  getMappedFriends = (friends, status, searchText) => {
    let filteredFriends = [];

    friends.forEach(friend => {
      friend.isFavourite = this.state.favourites.indexOf(friend.id) !== -1;

      if (status) {
        filteredFriends.filter(friend => friend.isOnline);
      } else {
        filteredFriends.filter(friend => !friend.isOnline);
      }
    });

    return filteredFriends;
  }

  render() {
    const {friends} = this.props;
    const {showOfflineUsers, searchText} = this.state;

    const onlineUsers = this.getOnlineUsers();

    const filteredFriends = friends.filter(friend => friend.name.indexOf(searchText) !== -1 || friend.surname.indexOf(searchText) !== -1);
    const onlineFilteredFriends = filteredFriends.filter(friend => friend.isOnline);
    const offlineFilteredFriends = filteredFriends.filter(friend => !friend.isOnline);

    const count = onlineFilteredFriends.length +
                (showOfflineUsers ? offlineFilteredFriends.length : 0);
    const total = showOfflineUsers ? friends.length : onlineUsers.length;

    const noUsersFound = offlineFilteredFriends.length === 0 &&
                onlineFilteredFriends.length === 0;

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
          friends={onlineFilteredFriends}
          toggleFavourite={this.toggleFavourite}
        />

        {showOfflineUsers && <FriendsGroup
          status={false}
          friends={offlineFilteredFriends}
          toggleFavourite={this.toggleFavourite}
        />}

        {noUsersFound &&
          <div>
            No users found
          </div>
        }
      </div>
    )
  }
};

export default FriendsList;
