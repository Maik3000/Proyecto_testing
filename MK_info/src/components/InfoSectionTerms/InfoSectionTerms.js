import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Button } from '../../globalStyles';
import {
  InfoSec,
  TopLine,
  Heading,
  Subtitle,

} from './InfoSection.elements';

function InfoSectionTerms({
  primary,
  lightBg,
  topLine,
  lightTopLine,
  lightText,
  lightTextDesc,
  headline,
  description,
  description1,
  description2,
  description3,
  description4,
  description5,
  description6,
  description7,
  description8,
  description9,
}) {
  return (
    <>
      <InfoSec lightBg={lightBg}>
        <Container>
    
                <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                <Subtitle lightTextDesc={lightTextDesc}>{description1}</Subtitle>
                <Subtitle lightTextDesc={lightTextDesc}>{description2}</Subtitle>
                <Subtitle lightTextDesc={lightTextDesc}>{description3}</Subtitle>
                <Subtitle lightTextDesc={lightTextDesc}>{description4}</Subtitle>
                <Subtitle lightTextDesc={lightTextDesc}>{description5}</Subtitle>
                <Subtitle lightTextDesc={lightTextDesc}>{description6}</Subtitle>
                <Subtitle lightTextDesc={lightTextDesc}>{description7}</Subtitle>
                <Subtitle lightTextDesc={lightTextDesc}>{description8}</Subtitle>
                <Subtitle lightTextDesc={lightTextDesc}>{description9}</Subtitle>
        </Container>
      </InfoSec>
    </>
  );
}

export default InfoSectionTerms;
