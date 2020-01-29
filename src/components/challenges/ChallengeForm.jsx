import React from 'react';

import { Form, Input, Radio  } from 'antd';

const ChallengeForm = (props) => {
  const { challenge, handleSubmit, form } = props;
  const { getFieldDecorator } = form;
  return (
    <Form onSubmit={handleSubmit} layout="horizontal" className="login-form">
      <Form.Item label="Title">
        {getFieldDecorator('title', {
          rules: [{ required: true, message: 'Please enter a title' }],
          initialValue: challenge.title || ''
        })(
          <Input placeholder="Title"
          />,
        )}
      </Form.Item>
      <Form.Item>
        {getFieldDecorator('description', {
          rules: [{ required: true, message: 'Please enter a description' }],
          initialValue: challenge.description || ''
        })(
          <Input.TextArea 
            type="text"
            placeholder="Description"
          />
        )}
      </Form.Item>
      <Form.Item>
        {getFieldDecorator('actionSteps', {
          rules: [{ required: true, message: 'Please actions' }],
          initialValue: challenge.actionSteps || ''
        })(
          <Input.TextArea 
            type="text"
            placeholder="Action steps"
          />
        )}
      </Form.Item>
      <Form.Item>
        {getFieldDecorator('isPublic', {
          initialValue: challenge.isPublic === undefined ? true : challenge.isPublic
        })(
        <Radio.Group>
          <Radio value={true}>Public</Radio>
          <Radio value={false}>Private</Radio>
        </Radio.Group>
        )}
      </Form.Item>
      
    </Form>
  );
}

export default ChallengeForm;