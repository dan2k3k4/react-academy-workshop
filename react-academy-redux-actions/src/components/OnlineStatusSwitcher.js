import React from 'react';
import Button from 'components/Button';

const OnlineStatusSwitcher = ({setStatus}) => <div>
  <Button onClick={() => setStatus('SHOW_ALL')} text="Show all" />
  <Button onClick={() => setStatus('SHOW_ONLINE')} text="Show online" />
  <Button onClick={() => setStatus('SHOW_OFFLINE')} text="Show offline" />
</div>

export default OnlineStatusSwitcher;
