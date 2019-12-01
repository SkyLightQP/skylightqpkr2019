import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
 faJava, faJsSquare, faReact, faVuejs, faCss3Alt, faHtml5, faDocker, faGitAlt
} from '@fortawesome/free-brands-svg-icons';

const TextStyle = styled.span`
  font-size: 16px;
`;

const TagStyle = styled.span`
  margin-right: 8px;
  margin-bottom: 8px;
`;

const TechTag: React.FC = () => {
    return (
        <>
            <div>
                <TagStyle className='tag is-light is-medium'>
                    <TextStyle>
                        Kotlin
                    </TextStyle>
                </TagStyle>

                <TagStyle className='tag is-light is-medium'>
                    <TextStyle>
                        <FontAwesomeIcon icon={faJava}/>
                        &nbsp;Java
                    </TextStyle>
                </TagStyle>

                <TagStyle className='tag is-light is-medium'>
                    <TextStyle>
                        <FontAwesomeIcon icon={faJsSquare}/>
                        &nbsp;JavaScript
                    </TextStyle>
                </TagStyle>

                <TagStyle className='tag is-light is-medium'>
                    <TextStyle>
                        TypeScript
                    </TextStyle>
                </TagStyle>

                <TagStyle className='tag is-light is-medium'>
                    <TextStyle>
                        <FontAwesomeIcon icon={faReact}/>
                        &nbsp;React
                    </TextStyle>
                </TagStyle>

                <TagStyle className='tag is-light is-medium'>
                    <TextStyle>
                        <FontAwesomeIcon icon={faReact}/>
                        &nbsp;React Native
                    </TextStyle>
                </TagStyle>

                <TagStyle className='tag is-light is-medium'>
                    <TextStyle>
                        <FontAwesomeIcon icon={faVuejs}/>
                        &nbsp;Vue.js
                    </TextStyle>
                </TagStyle>
            </div>

            <div>
                <TagStyle className='tag is-light is-medium'>
                    <TextStyle>
                        <FontAwesomeIcon icon={faHtml5}/>
                        &nbsp;HTML5
                    </TextStyle>
                </TagStyle>

                <TagStyle className='tag is-light is-medium'>
                    <TextStyle>
                        <FontAwesomeIcon icon={faCss3Alt}/>
                        &nbsp;CSS3
                    </TextStyle>
                </TagStyle>

                <TagStyle className='tag is-light is-medium'>
                    <TextStyle>
                        <FontAwesomeIcon icon={faDocker}/>
                        &nbsp;Docker
                    </TextStyle>
                </TagStyle>

                <TagStyle className='tag is-light is-medium'>
                    <TextStyle>
                        <FontAwesomeIcon icon={faGitAlt}/>
                        &nbsp;Git
                    </TextStyle>
                </TagStyle>
            </div>
        </>
    );
};

export default TechTag;
