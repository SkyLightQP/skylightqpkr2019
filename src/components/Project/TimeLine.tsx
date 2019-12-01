import React from 'react';
import styled from 'styled-components';

const SmallTextStyle = styled.p`
  font-size: 16px;
`;

const TimeLine: React.FC = () => {
    return (
        <div className='timeline'>
            <div className='timeline-item'>
                <div className='timeline-marker'/>
                <div className='timeline-content'>
                    <p className='heading'>2017 03</p>
                    <SmallTextStyle>
                        온라인 끝말잇기 웹게임 끄투닷컴 운영
                    </SmallTextStyle>
                </div>
            </div>

            <div className='timeline-item'>
                <div className='timeline-marker'/>
                <div className='timeline-content'>
                    <p className='heading'>2017 09</p>
                    <SmallTextStyle>
                        온도, 습도, 미세먼지 값을 측정하여 웹으로 보여주는 AirQualityTool
                    </SmallTextStyle>
                </div>
            </div>

            <div className='timeline-header'>
                <span className='tag is-dark'>2018</span>
            </div>

            <div className='timeline-item'>
                <div className='timeline-marker'/>
                <div className='timeline-content'>
                    <p className='heading'>2018 11</p>
                    <SmallTextStyle>
                        각종 기능이 추가된 디스코드 봇. 달콤한 봇
                    </SmallTextStyle>
                </div>
            </div>

            <div className='timeline-item'>
                <div className='timeline-marker'/>
                <div className='timeline-content'>
                    <p className='heading'>2018 12</p>
                    <SmallTextStyle>
                        2019년 카운트다운 사이트. 안녕! 2019!
                    </SmallTextStyle>
                </div>
            </div>

            <div className='timeline-header'>
                <span className='tag is-dark'>2019</span>
            </div>

            <div className='timeline-item'>
                <div className='timeline-marker'/>
                <div className='timeline-content'>
                    <p className='heading'>2019 01</p>
                    <SmallTextStyle>
                        익명 질문 사이트. Ask!
                    </SmallTextStyle>
                </div>
            </div>

            <div className='timeline-item'>
                <div className='timeline-marker'/>
                <div className='timeline-content'>
                    <p className='heading'>2019 02</p>
                    <SmallTextStyle>
                        끄투 TypeScript + React 리메이크 프로젝트. 쿵따(Kungtta)
                    </SmallTextStyle>
                </div>
            </div>

            <div className='timeline-item'>
                <div className='timeline-marker'/>
                <div className='timeline-content'>
                    <p className='heading'>2019 04</p>
                    <SmallTextStyle>
                        교내 시간표, 급식 알리미 디스코드 봇. KrónosBot
                    </SmallTextStyle>
                </div>
            </div>

            <div className='timeline-item'>
                <div className='timeline-marker'/>
                <div className='timeline-content'>
                    <p className='heading'>2019 06</p>
                    <SmallTextStyle>
                        교내 문제풀이 및 커뮤니티 사이트. 수프트
                    </SmallTextStyle>
                </div>
            </div>

            <div className='timeline-item'>
                <div className='timeline-marker'/>
                <div className='timeline-content'>
                    <p className='heading'>2019 11</p>
                    <SmallTextStyle>
                        학교 진로 프로젝트: 저작물 도용 신고 서비스. PASC
                    </SmallTextStyle>
                </div>
            </div>

            <div className='timeline-header'>
                <span className='tag is-dark'>NOW</span>
            </div>
        </div>
    );
};

export default TimeLine;
