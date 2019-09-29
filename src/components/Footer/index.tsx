import React from 'react';
import styled from 'styled-components';

const WrapperStyle = styled.footer`
  margin-top: 128px;
  height: 300px;
`;

const TextStyle = styled.p`
  font-size: 14px;
  margin-top: 80px;
`;

const Footer: React.FC = () => {
    return (
        <WrapperStyle className='footer'>
            <div className='content container'>
                <TextStyle>
                    본 사이트에 기재되어 있는 이메일, 연락처 무단 수집을 금지합니다.
                    <br/>
                    <a href='https://github.com/SkyLightQP/skylightqpkr2019'>View on Github</a>
                    <br/>
                    Copyright 2019. SkyLightQP. All rights reserved.
                </TextStyle>
            </div>
        </WrapperStyle>
    );
};

export default Footer;
