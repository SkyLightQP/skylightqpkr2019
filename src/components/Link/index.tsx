import React from 'react';
import styled from 'styled-components';
import SectionTitle from '../SectionTitle';

const SmallTextStyle = styled.p`
  font-size: 12px;
`;

const LinkStyle = styled.a`
  margin-right: 8px;
  margin-bottom: 8px;
`;

const Link: React.FC = () => {
    return (
        <div className='container'>
            <SectionTitle>LINK</SectionTitle>
            <LinkStyle
              className="button is-dark"
              href='https://github.com/SkyLightQP'
              target='_blank'
              rel='noopener noreferrer'
            >
                <b>GITHUB</b>
                &nbsp;
                <SmallTextStyle>github.com/SkyLightQP</SmallTextStyle>
            </LinkStyle>

            <LinkStyle
              className="button is-dark"
              href='mailto://me@skylightqp.kr'
              target='_blank'
              rel='noopener noreferrer'
            >
                <b>E-MAIL</b>
                &nbsp;
                <SmallTextStyle>me@skylightqp.kr</SmallTextStyle>
            </LinkStyle>

            <br/>
            <LinkStyle
              className="button is-dark"
              href='https://t.me/JVMStatic'
              target='_blank'
              rel='noopener noreferrer'
            >
                <b>TELEGRAM</b>
                &nbsp;
                <SmallTextStyle>@JVMStatic</SmallTextStyle>
            </LinkStyle>

            <LinkStyle
              className="button is-dark"
              href='https://discordapp.com/users/229015522484682752'
              target='_blank'
              rel='noopener noreferrer'
            >
                <b>DISCORD</b>
                &nbsp;
                <SmallTextStyle>하늘빛QP#5778</SmallTextStyle>
            </LinkStyle>

            <br/>
            <LinkStyle
              className="button is-dark"
              href='https://www.acmicpc.net/user/combbm'
              target='_blank'
              rel='noopener noreferrer'
            >
                <b>BAEKJOON</b>
                &nbsp;
                <SmallTextStyle>combbm</SmallTextStyle>
            </LinkStyle>

            <LinkStyle
              className="button is-dark"
              href='https://codeforces.com/profile/SkyLightQP'
              target='_blank'
              rel='noopener noreferrer'
            >
                <b>CODEFORCES</b>
                &nbsp;
                <SmallTextStyle>combbm</SmallTextStyle>
            </LinkStyle>

            <LinkStyle
              className="button is-dark"
              href='https://solved.ac/combbm'
              target='_blank'
              rel='noopener noreferrer'
            >
                <b>SOLVED.AC</b>
                &nbsp;
                <SmallTextStyle>combbm</SmallTextStyle>
            </LinkStyle>

            <LinkStyle
              className="button is-dark"
              href='https://ask.skylightqp.kr'
              target='_blank'
              rel='noopener noreferrer'
            >
                <b>ASK!</b>
                &nbsp;
                <SmallTextStyle>ask.skylightqp.kr</SmallTextStyle>
            </LinkStyle>
        </div>
    );
};

export default Link;
