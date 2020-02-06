import React from 'react';
import { connect } from 'react-redux';
import { Row } from 'antd';
import ChallengeListItem from './ChallengeListItem';
import CustomModal from '../Layout/CustomModal';
import ShowChallenge from '../challenges/ShowChallenge';
import { fetchChallenges } from '../../store/actions';

class ChallengeList extends React.Component {
  state = {
    toggleDeleteModal: false,
    toggleEditModal: false,
    toggleCreateModal: false,
    showModal: false ,
    selectedChallenge: {},
  }

  componentDidMount(){
    this.props.fetchChallenges()
  }

  deleteChallenge = (challengeId) => {
    this.props.deleteChallenge(challengeId);
  };

  toggleDeleteModal = () => {
    this.setState({toggleDeleteModal: !this.state.toggleDeleteModal})
  };

  toggleEditModal = () => {
    this.setState({ toggleDeleteModal: !this.state.toggleEditModal })
  };

  toggleCreateModal = () => {
    this.setState({toggleDeleteModal: !this.state.toggleCreateModal})
  }

  toggleDetailsModal = (challenge) => {
    this.setState({ selectedChallenge: Object.assign({},challenge) })
    this.setState({ showModal: true })
  }

  closeModal = () => {
    this.setState({ showModal: false })
  }

  render(){
    const modalProps = {
      title: 'Challenge Details',
      resource: this.state.selectedChallenge,
      component: challenge => <ShowChallenge  challenge={challenge} />,
      visible: this.state.showModal,
      submit: false
    };
    
    const callbacks = {
      deleteChallenge: this.deleteChallenge,
      toggleDetailsModal: this.toggleDetailsModal,
      toggleDeleteModal: this.toggleDeleteModal,
      onClose: this.closeModal,
    }

    const challenges = this.props.challenges && this.props.challenges.map(challenge => (
      <ChallengeListItem key={challenge.id} { ...callbacks } challenge={ challenge } />
    ));
    return(
      <div>
        <h1> Welcome to the challenge </h1>
        <Row gutter={16}>
          {challenges}
        </Row>
        <div style={{ background: '#ECECEC', padding: '30px' }}>
  </div>
        { 
          this.state.showModal &&  
          <CustomModal { ...callbacks } { ...modalProps }  />
        }
      </div>
    );
  } 
};

const mapStateToProps = (state) => {
  return {
    challenges: Object.values(state.challenges),
  }
}

export default connect(mapStateToProps, {
  fetchChallenges
})(ChallengeList);