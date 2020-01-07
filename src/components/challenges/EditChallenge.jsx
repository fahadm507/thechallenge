import React from 'react';
import ChallengeForm from './ChallengeForm';

const EditChallenge = props => {
  return (
    <>
      <h1> Edit this challenge </h1>
      <ChallengeForm { ...props }/>
    </>
  )
};

export default  EditChallenge;
