import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchChallenge } from '../../store/actions/'

class ShowChallenge extends Component {
  componentDidMount(){
    this.props.fetchChallenge(this.props.match.params.id)
  }
  render() {
    const { challenge } = this.props;
    return (
      <>
      <h1>{challenge && challenge.title}</h1>
      <p>{challenge && challenge.description}</p>
      </>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    challenge: state.challenge
  }
};

export default connect(mapStateToProps,{
  fetchChallenge
})(ShowChallenge);