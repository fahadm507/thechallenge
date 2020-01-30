import React from 'react';
import ChallengeForm from '../ChallengeForm';
import { Steps, Divider, Input } from 'antd';
const { Step } = Steps;
const { TextArea } = Input;


export const BasicInformation = props => {
    return <ChallengeForm { ...props}/>
};

export const ChallengeActionSteps = props => {
    const {current} = props;
    return (
        <div>
          <Divider />
  
          <Steps current={current} direction="vertical">
            <Step title={<Input placeholder="Enter step 1" />} description="This is a description." />
            <Step title={<TextArea placeholder="Enter description" />} description="This is a description." />
            <Step title="Step 3" description="This is a description." />
            <Step title={<Input />} description="This is a description." />
            <Step title="Step 2" description="This is a description." />
            <Step title="Step 3" description="This is a description." />
            <Step title={<Input />} description="This is a description." />
            <Step title="Step 2" description="This is a description." />
            <Step title="Step 3" description="This is a description." />
          </Steps>
        </div>
      );
};

export const FinalStep = props => {
    return <h1> What to do after completing the challenge </h1>
};