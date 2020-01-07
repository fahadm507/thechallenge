import React from 'react';
import axios from '../../apis/challenges';

class ChallengeList extends React.Component {

  state = { 
    challenges: []
  }

  async componentDidMount(){
    const response = await axios.get('/challenges');
    this.setState({challenges: response.data })
  }
  render(){
    console.log(`Retrieved challenge: ${this.state.challenges}`)
    const challenges = this.state.challenges.map(challenge => (
      <li key={challenge.id}>{challenge.title}</li>
    ));
    return(
      <div>
        <h1> Welcome to the challenge </h1>
        <ul>
          {challenges}
        </ul>
      </div>
    );
  } 
};

export default ChallengeList;