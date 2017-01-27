import {connect} from 'react-redux';
import UsersList from 'components/UsersList';

const getUsersByOnlineStatus = (users, onlineStatus) => {
  switch (onlineStatus) {
    case 'SHOW_ALL':
      return users;
    case 'SHOW_ONLINE':
      return users.filter(user => user.isOnline);
    case 'SHOW_OFFLINE':
      return users.filter(user => !user.isOnline);
    default:
      return users;
  }
}

const UsersListContainer = connect(
  state => ({
    users: getUsersByOnlineStatus(state.users.list, state.onlineStatus),
    loading: state.users.loading
  })
)(UsersList);

export default UsersListContainer;
