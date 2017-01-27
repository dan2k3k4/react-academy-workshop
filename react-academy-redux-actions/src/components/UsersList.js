import React from 'react';
import Spinner from 'components/Spinner';
import List from 'components/List';

const UsersList = ({users, loading}) => loading ?
  <Spinner /> : <List users={users} />

export default UsersList;
