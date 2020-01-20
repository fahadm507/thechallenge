import React from 'react';

const ShowChallenge = (props) => {
  const getContent = () => {
    const { challenge } = props;
    return (
      <>
      <h1>{challenge.title}</h1>
      <p>{challenge.description}</p>
      </>
    );
  }

  return getContent();
}

// const mapStateToProps = (state, ownProps) => {
//   return {
//     challenge: state.challenges.find(challenge => challenge.id === Number(ownProps.match.params.id))
//   }
// };

export default ShowChallenge;