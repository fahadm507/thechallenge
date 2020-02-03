import React from 'react';
import { Steps, Button, message } from 'antd';
import './steps.css'
// mport ChallengeForm from '../ChallengeForm';
import { BasicInformation, ChallengeActionSteps, FinalStep } from './Steps';
const { Step } = Steps;

class ChallengeStepsContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 0,
        };
    }

    steps = [
        {
            title: 'Basic Information',
            content: (challenge) =>  <BasicInformation challenge={challenge} { ...this.props} { ...this.state} />,
        },
        {
            title: 'Enter Action Steps',
            content: (challenge) => <ChallengeActionSteps challenge={challenge} { ...this.props}/> ,
        },
        {
            title: 'Last',
            content: (challenge) => <FinalStep challenge={challenge} { ...this.props}/>,
        },
    ];

    next() {
        const current = this.state.current + 1;
        this.setState({ current });
    }

    prev() {
        const current = this.state.current - 1;
        this.setState({ current });
    }

    render() {
        const { current } = this.state;
        const { challenge } = this.props;
        return (
        <div>
            <Steps current={current}>
            {this.steps.map(item => (
                <Step key={item.title} title={item.title} />
            ))}
            </Steps>
            <div className="steps-content">{this.steps[current].content(challenge)}</div>
            <div className="steps-action">
            {current < this.steps.length - 1 && (
                <Button type="primary" onClick={() => this.next()}>
                    Next
                </Button>
            )}
            {current === this.steps.length - 1 && (
                <Button type="primary" onClick={() => message.success('Processing complete!')}>
                    Done
                </Button>
            )}
            {current > 0 && (
                <Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>
                    Previous
                </Button>
            )}
            </div>
        </div>
        );
    }
}

export default ChallengeStepsContainer;