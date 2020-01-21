import React from 'react';

import { Form, Input, Button  } from 'antd';

const ChallengeForm = (props) => {
  const { challenge, handleSubmit, form } = props;
  const { getFieldDecorator } = form;
  return (
    <Form onSubmit={handleSubmit} layout="horizontal" className="login-form">
      <Form.Item label="Title">
        {getFieldDecorator('title', {
          rules: [{ required: true, message: 'Please enter a title' }],
          initialValue: (challenge && challenge.title) || ''
        })(
          <Input placeholder="Title"
          />,
        )}
      </Form.Item>
      <Form.Item>
        {getFieldDecorator('description', {
          rules: [{ required: true, message: 'Please enter a description' }],
          initialValue: (challenge && challenge.description) || ''
        })(
          <Input.TextArea 
            type="text"
            placeholder="Description"
          />
        )}
      </Form.Item>
    </Form>
  );
}

export default ChallengeForm;