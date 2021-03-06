import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
 faDocker, faGithub, faJsSquare, faReact,
} from '@fortawesome/free-brands-svg-icons';
import SectionTitle from '../SectionTitle';
import TimeLine from './TimeLine';
import Card from '../Card';

const TitleStyle = styled.p`
  font-size: 22px;
`;

const GithubLinkStyle = styled.a`
  margin-left: 8px;
  text-decoration: none;
`;

const GithubText = styled.p`
  font-size: 18px;
`;

const Project: React.FC = () => {
    return (
        <div className='container'>
            <SectionTitle>PROJECT</SectionTitle>

            <div className='columns'>
                <div className='column is-half'>
                    <TimeLine/>
                </div>

                <div className='column'>
                    <Card>
                        <TitleStyle>끄투닷컴 KKuTuDotcom</TitleStyle>
                        <p>
                            끄투닷컴은 2017년부터 현재까지 운영 중인 온라인 끝말잇기 웹게임입니다.
                            <br/>
                            끝말잇기 외에도 앞말잇기, 영어 끝말잇기, 타자게임 등을 즐길 수 있습니다.
                            <br/>
                            <span>
                                <FontAwesomeIcon icon={faJsSquare}/>
                                &nbsp;
                                <FontAwesomeIcon icon={faDocker}/>
                                &nbsp;
                                <GithubLinkStyle href='https://github.com/SkyLightQP/KKutuDotcom' target='_blank' rel='noopener noreferrer'>
                                    <FontAwesomeIcon icon={faGithub}/>
                                    &nbsp;Github
                                </GithubLinkStyle>
                            </span>
                        </p>
                    </Card>

                    <Card>
                        <TitleStyle>쿵따 Kungtta</TitleStyle>
                        <p>
                            기반 언어와 라이브러리를 바꾸고 새롭게 디자인 하는 끄투 리메이크 프로젝트입니다.
                            <br/>
                            현재 개발 중입니다.
                            <br/>
                            <span>
                                <div className='tag is-light'>TypeScript</div>
                                &nbsp;
                                <FontAwesomeIcon icon={faReact}/>
                                &nbsp;
                                <FontAwesomeIcon icon={faDocker}/>
                                &nbsp;
                                <GithubLinkStyle href='https://github.com/kkutureact/Kungtta' target='_blank' rel='noopener noreferrer'>
                                    <FontAwesomeIcon icon={faGithub}/>
                                    &nbsp;Github
                                </GithubLinkStyle>
                            </span>
                        </p>
                    </Card>

                    <Card>
                        <TitleStyle>수프트 Suft</TitleStyle>
                        <p>
                            시험대비 CBT를 제공하는 사이트입니다.
                            <br/>
                            백엔드에 TypeScript가 쓰이고 JsonWebToken으로 인증 시스템을 만들었습니다.
                            <br/>
                            <span>
                                <div className='tag is-light'>TypeScript</div>
                                &nbsp;
                                <div className='tag is-light'>JWT</div>
                                &nbsp;
                                <FontAwesomeIcon icon={faReact}/>
                                &nbsp;
                                <FontAwesomeIcon icon={faDocker}/>
                                &nbsp;
                                <GithubLinkStyle href='https://github.com/swsuft/suft-frontend' target='_blank' rel='noopener noreferrer'>
                                    <FontAwesomeIcon icon={faGithub}/>
                                    &nbsp;Github
                                </GithubLinkStyle>
                            </span>
                        </p>
                    </Card>

                    <a className="button is-medium is-fullwidth is-dark" href='https://github.com/SkyLightQP' target='_blank' rel='noopener noreferrer'>
                        <GithubText>더 많은 프로젝트는 Github에서...</GithubText>
                    </a>
                </div>
            </div>

        </div>
    );
};

export default Project;
