import React from 'react';
import TimeLineItem from './TimeLineItem';

const TimeLine: React.FC = () => {
    return (
        <div className='timeline'>
            <div className='timeline-header'>
                <span className='tag is-dark'>2017</span>
            </div>

            <TimeLineItem date="2017 03">온라인 끝말잇기 웹게임 끄투닷컴 운영</TimeLineItem>
            <TimeLineItem date="2017 09">온도, 습도, 미세먼지 값을 측정하여 웹으로 보여주는 AirQualityTool</TimeLineItem>

            <div className='timeline-header'>
                <span className='tag is-dark'>2018</span>
            </div>

            <TimeLineItem date="2018 11">각종 기능이 추가된 디스코드 봇. 달콤한 봇</TimeLineItem>
            <TimeLineItem date="2018 12">2019년 카운트다운 사이트. 안녕! 2019!</TimeLineItem>

            <div className='timeline-header'>
                <span className='tag is-dark'>2019</span>
            </div>

            <TimeLineItem date="2019 01">익명 질문 사이트. Ask!</TimeLineItem>
            <TimeLineItem date="2019 02">끄투 TypeScript + React 리메이크 프로젝트. 쿵따(Kungtta)</TimeLineItem>
            <TimeLineItem date="2019 04">교내 시간표, 급식 알리미 디스코드 봇. KrónosBot</TimeLineItem>
            <TimeLineItem date="2019 06">교내 문제풀이 및 커뮤니티 사이트. 수프트</TimeLineItem>
            <TimeLineItem date="2019 11">학교 진로 프로젝트: 저작물 도용 신고 서비스. PASC</TimeLineItem>
            <TimeLineItem date="2019 12">제2회 KB국민은행 소프트웨어 경진 대회. DOP 프론트엔드(frontend) 참여</TimeLineItem>

            <div className='timeline-header'>
                <span className='tag is-dark'>2020</span>
            </div>

            <TimeLineItem date="2020 02">Hello20thon 대회. Seed 백엔드(backend) 참여</TimeLineItem>


            <div className='timeline-header'>
                <span className='tag is-dark'>NOW</span>
            </div>
        </div>
    );
};

export default TimeLine;
