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
        const { form } = this.props;
        const actionSteps = form.getFieldValue('actions');

        const id = actionSteps.length + 1;
        this.setState({
            actionSteps: [
                ...actionSteps,
                { ...this.props.initialActionStep, id }
            ] 
        });
    };

    toggleEditAndDisplay = (title, description, actionIndex) => {
        console.log(
            `title: ${title}
            description: ${description}`
        )
        return(
            <Step style={{ width: '83%' }} key={actionIndex}
                title={title}
                description={description} 
            />
        )
    }

    getActionSteps = () => {
        const { actionSteps } = this.state;
        const { current, form, challenge } = this.props;

        return (
            <Steps current={current} direction="vertical">
                {
                    actionSteps.map((action, actionIndex) => {
                        const titleInput = (
                            form.getFieldDecorator(`actions[${actionIndex}][title]`, {
                                rules: [{ 
                                    required: true,
                                    message: 'Please input your nickname!',
                                    whitespace: true }
                                ],
                                initialValue: action.title
                            })(<Input
                                style={{ width: '100%', marginBottom: 2 }}
                                placeholder={`Enter step ${actionIndex + 1}`} />)
                        );
                        const titleText = form.getFieldValue(`actions[${actionIndex}][title]`)
                        const descriptionInput = (
                            form.getFieldDecorator(`actions[${actionIndex}][description]`, {
                                rules: [{ 
                                    required: true,
                                    message: 'Please input your nickname!',
                                    whitespace: true }
                                ],
                                initialValue: action.title
                            })(
                                <TextArea
                                    style={{ width: '80%', marginTop: 2 }}
                                    placeholder={`Enter description for step ${actionIndex + 1}`}
                                />
                            )
                        );
                        const descriptionText = form.getFieldValue(`actions[${actionIndex}][description]`);
                        if (actionIndex === actionSteps.length - 1 ) {
                            return this.toggleEditAndDisplay(titleInput, descriptionInput, actionIndex)
                        } 
                        return this.toggleEditAndDisplay(titleText, descriptionText, actionIndex)
                        
                    })
                }
            </Steps>
        )
    };

    render(){
        const { actionSteps } = this.state;
        const { current, form, challenge } = this.props;
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
                            <Steps current={current} direction="vertical">
                                {actionSteps.map((action, actionIndex) => (
                                    <Step key={actionIndex}
                                        title={
                                            form.getFieldValue(`actions[${actionIndex}][title]`)
                                        }
                                        description={
                                            form.getFieldValue(`actions[${actionIndex}][description]`)
                                        } 
                                    />
                                ))}
                            </Steps>  
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