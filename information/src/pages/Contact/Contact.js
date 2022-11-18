import React from 'react';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';
import { InfoSectionContact } from '../../components';

function Contact() {
  return (
    <>
      <InfoSectionContact {...homeObjOne} />

    </>
  );
}

export default Contact;
