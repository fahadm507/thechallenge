import React from 'react';
import ChallengeForm from './ChallengeForm';

const CreateChallenge = props => {
  return (
    <>
    <h1> Create a new Challenge </h1>
    <ChallengeForm { ...props } />
    </>
  )
};

export default  CreateChallenge;

