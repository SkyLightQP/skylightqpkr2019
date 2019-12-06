import React from 'react';
import styled from 'styled-components';

const SmallTextStyle = styled.p`
  font-size: 16px;
`;

interface TimeLineItemProps {
    readonly date: string;
}

const TimeLineItem: React.FC<TimeLineItemProps> = ({ date, children }) => {
    return (
        <div className='timeline-item'>
            <div className='timeline-marker'/>
            <div className='timeline-content'>
                <p className='heading'>{date}</p>
                <SmallTextStyle>
                    {children}
                </SmallTextStyle>
            </div>
        </div>
    );
};

export default TimeLineItem;
