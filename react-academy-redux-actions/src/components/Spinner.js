import React from 'react';

const Spinner = () =>
<div>
  <span>Loading... </span>
  <svg width="100px" viewBox="0 0 100 100"
    preserveAspectRatio="xMidYMid">
    <rect x="0"
      y="0"
      width="100"
      height="100"
      fill="none"
    />
    <path
      id="loadingPath"
      d="M24.3,30C11.4,30,5,43.3,5,50s6.4,20,19.3,20c19.3,0,32.1-40,51.4-40 C88.6,30,95,43.3,95,50s-6.4,20-19.3,20C56.4,70,43.6,30,24.3,30z"
      fill="none"
      stroke="#00ff1a"
      strokeWidth="1px"
      strokeDasharray="5px"/>
    <circle cx="0"
      cy="0"
      r="5"
      fill="#00ff1a">
      <animateMotion begin="0s"
        dur="1s"
        repeatCount="indefinite">
        <mpath xlinkHref="#loadingPath">
        </mpath>
      </animateMotion>
    </circle>
    <circle cx="0"
      cy="0"
      r="5"
      fill="#00ff1a">
      <animateMotion begin="0.08s"
        dur="1s"
        repeatCount="indefinite">
        <mpath xlinkHref="#loadingPath">
        </mpath>
      </animateMotion>
    </circle>
    <circle cx="0"
      cy="0"
      r="5"
      fill="#00ff1a">
      <animateMotion begin="0.16s"
        dur="1s"
        repeatCount="indefinite">
        <mpath xlinkHref="#loadingPath">
        </mpath>
      </animateMotion>
    </circle>
    <circle cx="0"
      cy="0"
      r="5"
      fill="#00ff1a">
      <animateMotion begin="0.25s"
        dur="1s"
        repeatCount="indefinite">
        <mpath xlinkHref="#loadingPath">
        </mpath>
      </animateMotion>
    </circle>
    <circle cx="0"
      cy="0"
      r="5"
      fill="#00ff1a">
      <animateMotion begin="0.33s"
        dur="1s"
        repeatCount="indefinite">
        <mpath xlinkHref="#loadingPath">
        </mpath>
      </animateMotion>
    </circle>
  </svg>
</div>

export default Spinner;
