import React from 'react';
import StatusIcon from 'components/StatusIcon';

const User = ({user}) =>
<span>
  <StatusIcon status={user.onlineStatus}/>
  <span>
    {user.name}
  </span>
</span>

export default User;
