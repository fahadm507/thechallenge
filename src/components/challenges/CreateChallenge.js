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

  render(){
    return (
      <>
      <h1> Create a new Challenge </h1>
      <ChallengeForm handleCreate={this.handleCreate} { ...this.props } />
      </>
    )
  }
  
};

export default connect(null, { 
  createChallenge
 })(Form.create()(CreateChallenge));

