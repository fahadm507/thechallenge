import React from 'react';
import { Link } from 'react-router-dom';
import { string, shape, number } from 'prop-types';
import { List } from 'antd';

const { Item } = List;

const ChallengeListItem = ({ challenge }) => {
    return(
        <Item key={challenge.id}
            actions={[
            <Link to={`challenges/edit/${challenge.id}`}>edit</Link>, 
            <Link to={`challenges/${challenge.id}`}>Details</Link>,
            <Link to={`challenges/delete/${challenge.id}`}>Delete</Link>, 
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