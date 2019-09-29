import React from 'react';
import styled from 'styled-components';
import SectionTitle from '../SectionTitle';
import TimeLine from './TimeLine';

const Project: React.FC = () => {
    return (
        <div className='container'>
            <SectionTitle>PROJECT</SectionTitle>

            <div className='columns'>
                <div className='column is-half'>
                    <TimeLine/>
                </div>

                <div className='column'>
                    <div className='containe'>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Project;
