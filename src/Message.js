import React from 'react'
import styled from 'styled-components';

const Message = styled(({ children, className }) => (
  <p className={className}>
    {children}
  </p>
))`
  font-size: 24px;
  color: ${props => props.color || 'palevioletred'};
`;

export default Message;
