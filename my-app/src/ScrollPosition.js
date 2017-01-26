import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  position: relative;
  background: 'tomato';
`;

const ScrollPosition = props => {

  return (
    <StyledDiv {...props} style={{
      "top": props.scrollPosition
    }}>
        Scroll: {props.scrollPosition}
    </StyledDiv>
  )
}

export default ScrollPosition;
