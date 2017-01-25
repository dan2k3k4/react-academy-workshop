import React from 'react';

const ScrollPosition = ({scrollPosition, containerWidth}) => {
  const padded = 120;

  return (
    <div style={{
      position: "relative",
      top: scrollPosition,
      left: (scrollPosition < containerWidth - padded ?
              scrollPosition :
              containerWidth - padded
            )
    }}>
      Scroll: {scrollPosition}
    </div>
  )
}

export default ScrollPosition;
