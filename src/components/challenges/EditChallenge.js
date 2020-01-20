import React from 'react';
import { connect } from 'react-redux';
import { Form } from 'antd';
import ChallengeForm from './ChallengeForm';
import { fetchChallenge, updateChallenge } from '../../store/actions';
import CustomModal from '../Layout/CustomModal';
import history from '../../history';

class EditChallenge extends React.Component {

  state = {
    showModal: true,
    challenge: {
      title: '', 
      description: ''
    }
  }

  handleUpdate = (data) => {
    const { id } = this.props.challenge;
    this.props.updateChallenge(id, data)
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
        this.handleUpdate(values)
      }
    });
  };

  componentDidMount(){
    this.props.fetchChallenge(this.props.match.params.id)
  }
  render(){
    const modalCallbacks = { 
      onClose: this.closeModal,
      handleSubmit: this.handleSubmit
     }

    const modalProps = {
      title: 'Edit Challenge',
      resource: this.state.challenge,
      component: challenge => <ChallengeForm challenge={this.props.challenge}  { ...this.props }  />,
      visible: this.state.showModal,
      submit: true
    };

    return (
      <CustomModal { ...modalProps } { ...modalCallbacks } />
    )
  } 
};

const mapStateToProps = (state, ownProps) => {
  return {
    challenge: state.challenges.find(val => val.id === Number(ownProps.match.params.id))
  };
};

export default connect(mapStateToProps, {
  fetchChallenge,
  updateChallenge
})(Form.create()(EditChallenge));
