import React from 'react';
import { connect } from 'react-redux';
import { Form } from 'antd';
import ChallengeForm from './ChallengeForm';
import { fetchChallenge } from '../../store/actions';

class EditChallenge extends React.Component {
  handleUpdate = (values) => {
    // dispatch an action to store reducers
  };

  componentDidMount(){
    this.props.fetchChallenge(this.props.match.params.id)
  }
  render(){
    return (
      <>
        <h1> Edit this challenge </h1>
        <ChallengeForm { ...this.props } handleUpdate={this.handleUpdate}/>
      </>
    )
  } 
};

const mapStateToProps = (state, ownProps) => {
  const targetChallenge = Object.values(state.challenges)
    .find(val => val.id === Number(ownProps.match.params.id));
  return {
    challenge: targetChallenge
  };
};

export default connect(mapStateToProps, {
  fetchChallenge
})(Form.create()(EditChallenge));
