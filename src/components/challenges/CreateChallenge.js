import React from 'react';
import { connect } from 'react-redux';
import { Form } from 'antd';
import ChallengeForm from './ChallengeForm';
import { createChallenge } from '../../store/actions';

class CreateChallenge extends React.Component {
  handleCreate = (data) => {
    console.log(`
      data is: ${data}
    `)
    this.props.createChallenge(data)
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { form } = this.props;
    form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        this.handleCreate(values)
      }
    });
  };

  render(){
    return (
      <>
      <h1> Create a new Challenge </h1>
      <ChallengeForm handleSubmit={this.handleSubmit} { ...this.props } />
      </>
    )
  }
  
};

export default connect(null, { 
  createChallenge
 })(Form.create()(CreateChallenge));

