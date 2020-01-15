import React from 'react';

import { Form, Input, Button  } from 'antd';

const ChallengeForm = (props) => {
  const { handleCreate, form } = props;
  const handleSubmit = e => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        handleCreate(values)
      }
    });
  };

    const { getFieldDecorator } = form;
    return (
      <Form onSubmit={handleSubmit} layout="horizontal" className="login-form">
        <Form.Item label="Title">
          {getFieldDecorator('title', {
            rules: [{ required: true, message: 'Please enter a title' }],
          })(
            <Input placeholder="Title"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('description', {
            rules: [{ required: true, message: 'Please enter a description' }],
          })(
            <Input.TextArea 
              type="text"
              placeholder="Description"
            />
          )}
        </Form.Item>
        <Button type="primary" htmlType="submit">
            Save
        </Button>
      </Form>
    );
}

export default ChallengeForm;