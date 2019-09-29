import React from 'react';
import styled from 'styled-components';
import TechTag from './TechTag';
import SectionTitle from '../SectionTitle';

const SmallTextStyle = styled.p`
  font-size: 14px;
`;

const TechStack: React.FC = () => {
    return (
        <div className='container'>
            <SectionTitle>TECH STACK</SectionTitle>
            <article className='message'>
                <div className='message-body'>
                    세상에는 딱 두 가지 프로그래밍 언어가 있다. 사람들이 욕하는 언어와 아무도 사용하지 않는 언어.
                    <br/>
                    <SmallTextStyle>- Bjarne Stroustrup, C++의 창시자</SmallTextStyle>
                </div>
            </article>

            <TechTag/>
        </div>
    );
};

export default TechStack;
