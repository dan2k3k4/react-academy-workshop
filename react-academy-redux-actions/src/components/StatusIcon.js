import React from 'react';

const ONLINE_COLOUR = '#00ff00';
const OFFLINE_COLOUR = '#ff0000';
const getColour = status => status ? ONLINE_COLOUR : OFFLINE_COLOUR;

const StatusIcon = ({status}) =>
  <svg
    width="15px"
    viewBox="0 0 100 100"
    style={{paddingRight: "10px"}}
    >
    <circle
      cx="50"
      cy="50"
      r="50"
      fill={getColour(status)}>
    </circle>
  </svg>

export default StatusIcon;
