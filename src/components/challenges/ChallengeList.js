import React from 'react';
import { connect } from 'react-redux';
import { List } from 'antd';
import ChallengeListItem from './ChallengeListItem';
import { fetchChallenges } from '../../store/actions';

class ChallengeList extends React.Component {

  componentDidMount(){
    this.props.fetchChallenges()
  }
  render(){
    const challenges = this.props.challenges && this.props.challenges.map(challenge => (
      <ChallengeListItem challenge={challenge}/>
    ));
    return(
      <div>
        <h1> Welcome to the challenge </h1>
        <List>
          {challenges}
        </List>
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