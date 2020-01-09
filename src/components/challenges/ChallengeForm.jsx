import React from 'react';

import { Form, Input, Button  } from 'antd';

class ChallengeForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} layout="horizontal" className="login-form">
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
}

export default Form.create({ name: 'challenge_form' })(ChallengeForm);