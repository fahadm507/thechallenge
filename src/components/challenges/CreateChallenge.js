import React from 'react';
import { connect } from 'react-redux';
import { Form } from 'antd';
import history from '../../history';
import ChallengeForm from './ChallengeForm';
import { createChallenge } from '../../store/actions';
import DrawerInstance from '../../components/Layout/DrawerInstance';

class CreateChallenge extends React.Component {
  state = {
    showDrawer: true,
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

  closeDrawer = () => {
    this.setState({ showDrawer: false })
    history.push('/');
  }

  handleSubmit = (e) => {
    e.preventDefault()
    debugger;
    const { form } = this.props;
    form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        this.handleCreate(values)
      }
    });
  };

  render(){
    const drawerProps = {
      title: 'Create Challenge',
      resource: this.state.challenge,
      component: challenge => <ChallengeForm handleSubmit={this.handleSubmit} { ...this.props } />,
      visible: this.state.showDrawer,
      submit: true
    };

    const drawerCallbacks = { onClose: this.closeDrawer }

    return (
      <>
      <h1> Create a new Challenge </h1>
      <DrawerInstance { ...drawerProps } { ...drawerCallbacks } />
      </>
    )
  }
  
};

export default connect(null, { 
  createChallenge
 })(Form.create()(CreateChallenge));

