import React from 'react';
import { connect } from 'react-redux';
import { List } from 'antd';
import ChallengeListItem from './ChallengeListItem';
import DrawerInstance from '../Layout/DrawerInstance';
import ShowChallenge from '../challenges/ShowChallenge';
import { fetchChallenges } from '../../store/actions';

class ChallengeList extends React.Component {
  state = {
    toggleDeleteModal: false,
    toggleEditDrawer: false,
    toggleCreateDrawer: false,
    showDrawer: false ,
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

  toggleEditDrawer = () => {
    this.setState({ toggleDeleteModal: !this.state.toggleEditModal })
  };

  toggleCreateDrawer = () => {
    this.setState({toggleDeleteModal: !this.state.toggleCreateModal})
  }

  toggleDetailsDrawer = (challenge) => {
    this.setState({ selectedChallenge: Object.assign({},challenge) })
    this.setState({ showDrawer: true })
  }

  closeDrawer = () => {
    this.setState({ showDrawer: false })
  }

  render(){
    const drawerProps = {
      title: 'Challenge Details',
      resource: this.state.selectedChallenge,
      component: challenge => <ShowChallenge  challenge={challenge} />,
      visible: this.state.showDrawer,
      submit: false
    };
    
    const callbacks = {
      deleteChallenge: this.deleteChallenge,
      toggleDetailsDrawer: this.toggleDetailsDrawer,
      toggleDeleteModal: this.toggleDeleteModal,
      onClose: this.closeDrawer,
    }

    const challenges = this.props.challenges && this.props.challenges.map(challenge => (
      <ChallengeListItem key={challenge.id} { ...callbacks } challenge={ challenge } />
    ));
    return(
      <div>
        <h1> Welcome to the challenge </h1>
        <List>
          {challenges}
        </List>
        { 
          this.state.showDrawer &&  
          <DrawerInstance { ...callbacks } { ...drawerProps }  />
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