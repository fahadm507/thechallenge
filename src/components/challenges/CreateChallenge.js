import React from 'react';
import { connect } from 'react-redux';
import { Form } from 'antd';
import history from '../../history';
import ChallengeForm from './ChallengeForm';
import { createChallenge } from '../../store/actions';
import CustomModal from '../../components/Layout/CustomModal';

class CreateChallenge extends React.Component {
  state = {
    showModal: true,
    challenge: {
      title: '', 
      description: ''
    }
  }
  handleCreate = (data) => {
    console.log(`
      data is: ${data}
    `)
    this.props.createChallenge(data)
  }

  closeModal = () => {
    this.setState({ showModal: false })
    history.push('/');
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
    const modalCallbacks = { 
      onClose: this.closeModal,
      handleSubmit: this.handleSubmit
     }

    const modalProps = {
      title: 'Create Challenge',
      resource: this.state.challenge,
      component: challenge => <ChallengeForm challenge={this.state.challenge}  { ...this.props }  />,
      visible: this.state.showModal,
      submit: true
    };

    return (
      <CustomModal { ...modalProps } { ...modalCallbacks } />
    )
  }
  
};

export default connect(null, { 
  createChallenge
 })(Form.create()(CreateChallenge));

