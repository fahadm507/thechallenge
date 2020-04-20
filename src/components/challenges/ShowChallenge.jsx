import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Card, Descriptions, Row, Col, Button } from 'antd';
import { fetchChallenge, joinChallenge } from '../../store/actions/'

class ShowChallenge extends Component {
  componentDidMount(){
    this.props.fetchChallenge(this.props.match.params.id)
  }

  onJoinChallenge = () => {
    debugger;
    this.props.joinChallenge(this.props.user.id)
  };
  render() {
    const { challenge } = this.props;
    const cardStyle = {
      height: 300,
      position: 'relative',
      textAlign: 'center',
      margin: 20,
    };

    return (
      <>
      <Row style={{ width: '100%', maxHeight: 250,  backgroundColor: '#505763' }} gutter={16}>
      <Col span={8}>
          <Card style={cardStyle}>
              <Descriptions title="">
                <Descriptions.Item label="UserName">Zhou Maomao</Descriptions.Item>
                <Descriptions.Item label="Telephone">1810000000</Descriptions.Item>
                <Descriptions.Item label="Live">Hangzhou, Zhejiang</Descriptions.Item>
                <Button type="primary"><Link onClick={this.onJoinChallenge}> JOIN CHALLENGE </Link></Button>
              </Descriptions>
          </Card>
        </Col>
        <Col span={16}>
          <h1 className="challenge-title">{challenge.title}</h1>
        </Col>
        
      </Row>
      </>
    );
  }
}


const mapStateToProps = (state, ownProps) => {
  debugger;
  return {
    challenge: state.challenge,
    user: state.currentUser
  }
};

export default connect(mapStateToProps,{
  fetchChallenge
})(ShowChallenge);