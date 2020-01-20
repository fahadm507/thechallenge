import React from 'react';
import { connect } from 'react-redux';
import { Modal } from 'antd';
import { fetchChallenge, deleteChallenge } from  '../../store/actions';
import history from '../../history';

class DeleteChallenge extends React.Component {
 state = { visible: true };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleDelete = (challengeId) => {
     this.props.deleteChallenge(challengeId);
     this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    history.push('/challenges')
  };

  componentDidMount(){
    this.props.fetchChallenge(this.props.match.params.id);
  }

  render() {
    const { challenge } = this.props;
    return (
      <>
        <Modal
          title="Basic Modal"
          visible={this.state.visible}
          onOk={() => this.handleDelete(challenge.id)}
          okText="Delete"
          onCancel={this.handleCancel}
        >
        <p>
          {` Are you sure you want to delete this challenge:
          ${challenge && challenge.title}`}
        </p>
        </Modal>
      </>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    challenge: state.challenges.find(challenge => challenge.id === Number(ownProps.match.params.id))
  }
};

export default connect(mapStateToProps, { 
  fetchChallenge, 
  deleteChallenge
})(DeleteChallenge);