import React, { Component } from 'react';
import ChallengeForm from '../ChallengeForm';
import { Steps, Divider, Input, Tabs, Button } from 'antd';
const { Step } = Steps;
const { TextArea } = Input;
const { TabPane } = Tabs;

export const BasicInformation = props => {
    return <ChallengeForm { ...props}/>
};

export class ChallengeActionSteps extends Component {
    static defaultProps = {
        initialActionStep: { 
            id: 1,
            title: '', 
            description: '' 
        }
    }

    constructor(props){
        super(props);
        this.state = {
            actionSteps: [ { ...this.props.initialActionStep }]
        };
    }

    addNewActionStep = () => {
        const { actionSteps } = this.state;
        const id = actionSteps.length + 1;
        this.setState({
            actionSteps: [
                ...actionSteps,
                { ...this.props.initialActionStep, id }
            ] 
        });
    };

    getActionSteps = () => {
        const { actionSteps } = this.state;
        const { current } = this.props;
        return (
            <Steps current={current} direction="vertical">
                {actionSteps.map((action, actionIndex) => (
                    <Step key={actionIndex}
                        title={
                            <Input 
                                placeholder={`Enter step ${actionIndex + 1}`}
                                value={action.description}
                            />
                        }
                        description={
                            <TextArea
                                value={action.description}
                                placeholder={`Enter description for step ${actionIndex + 1}`}
                            />
                        } 
                    />
                ))}
            </Steps>
        )
    };

    render(){
        // const { challenge, form } = this.props;
        return (
            <div>
                <Divider />
                <div className="card-container">
                    <Tabs type="card" size='all'>
                        <TabPane tab="Action steps"
                                 key="1"
                                 tabPosition="right">
                            {this.getActionSteps()}
                            <Button type='default' onClick={this.addNewActionStep}>Add action</Button>
                        </TabPane>
                        <TabPane tab="Preview changes" key="2">
                            Add preview of action steps here.
                        </TabPane>
                    </Tabs>
                </div>   
            </div>
        );
    }   
};

export const FinalStep = props => {
    return <h1> What to do after completing the challenge </h1>
};