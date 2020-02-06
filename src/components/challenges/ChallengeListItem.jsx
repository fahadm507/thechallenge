import React from 'react';
import { Link } from 'react-router-dom';
import { string, shape, number } from 'prop-types';
import { Col, Card, Icon, Avatar, Row } from 'antd';

const { Meta } = Card;

const ChallengeListItem = (props) => {
    const { challenge } = props;
    return(
        <Col span={8}>
            <Card
                style={{ width: 300, margin: 10 }}  
                actions={[
                    <Row gutter={16}>
                        <Col span={8}>
                            <Link to={`challenges/edit/${challenge.id}`}>
                                <Icon title="Edit challenge" key="ediChallenge" type="edit" />    
                            </Link>
                        </Col>
                        <Col span={8}>
                            <Link to={`challenges/${challenge.id}`} key="challengeDetails"> Learn More</Link>
                        </Col>
                        <Col span={8}>
                            <Link to={`challenges/delete/${challenge.id}`}>
                                <Icon title="Edit challenge" type="delete" />
                            </Link>
                        </Col>
                    </Row>
                ]}
                cover={
                    <img
                        alt="example"
                        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                    />
                }
            >
            <Meta
                avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                title={challenge.title}
                description={challenge.description}
            />
            </Card>
        </Col>
    ); 
};

export default ChallengeListItem;

ChallengeListItem.propTypes = {
    challenge: shape({
        title: string.isRequired,
        id: number.isRequired
    }).isRequired
}