import React from 'react';
import { Link } from 'react-router-dom';
import { string, shape, number } from 'prop-types';
import { List, Button } from 'antd';

const { Item } = List;

const ChallengeListItem = (props) => {
    const { challenge } = props;
    return(
        <Item
            actions={[
            <>
            <Link to={`challenges/edit/${challenge.id}`}><Button type="default">Edit</Button></Link>
            <Link to={`challenges/${challenge.id}`}> <Button type="primary">See details</Button></Link>
            <Link to={`challenges/delete/${challenge.id}`}><Button type="danger">Delete</Button></Link>
            </>
        ]}>
          
        {challenge.title}
        </Item>
    ); 
};

export default ChallengeListItem;

ChallengeListItem.propTypes = {
    challenge: shape({
        title: string.isRequired,
        id: number.isRequired
    }).isRequired
}