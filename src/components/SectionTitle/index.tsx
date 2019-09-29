import React from 'react';
import styled from 'styled-components';

const TitleStyle = styled.p`
  font-size: 26px;
  font-weight: bold;
  margin: 16px auto;
  letter-spacing: 4px;
`;

const SectionTitle: React.FC = ({ children }) => {
    return (
        <TitleStyle>{children}</TitleStyle>
    );
};

export default SectionTitle;
