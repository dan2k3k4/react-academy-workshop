import React from 'react';
import User from 'components/User';

const List = ({users}) =>
<ul>
  {users.map(user => <li key={user.id}> <User user={user} /> </li>)}
</ul>

export default List;
