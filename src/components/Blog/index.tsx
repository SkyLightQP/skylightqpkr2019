import React from 'react';
import styled from 'styled-components';
import SectionTitle from '../SectionTitle';

const SmallTextStyle = styled.p`
  font-size: 12px;
`;

const BlogLinkStyle = styled.a`
  margin-top: 8px;
`;

const Blog: React.FC = () => {
    return (
        <div className='container'>
            <SectionTitle>BLOG</SectionTitle>
            <p>“인터넷으로 얻은 지식은 인터넷으로”를 실천하기 위해 블로그에 기술 이야기나 가끔 일상을 올리고 있습니다.</p>
            <BlogLinkStyle className="button is-dark" href='https://blog.skylightqp.kr' target='_blank' rel='noopener noreferrer'>
                <b>BLOG</b>
                &nbsp;
                <SmallTextStyle>blog.skylightqp.kr</SmallTextStyle>
            </BlogLinkStyle>
        </div>
    );
};

export default Blog;
