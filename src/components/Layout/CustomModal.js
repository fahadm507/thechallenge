import React from 'react';
// import history from '../../history';
// import { string, func, obj } from 'prop-types';
import { Modal, Button } from 'antd';


class CustomModal extends React.Component {

  render() {
    const { 
      title,
      onClose,
      handleSubmit,
      visible,
      component,
      resource,
      submit
    } = this.props;

    return (
      <>
        <Modal
          width={'60%'}
          centered={true}
          closable={true}
          title={title}
          onClose={onClose}
          visible={visible}
          onCancel={onClose}
          footer={[
            <Button key="back" onClick={onClose}>
              Cancel
            </Button>,
            <Button hidden={!submit} key="submit" type="primary" onClick={handleSubmit}>
              Submit
            </Button>,
          ]}
        >
          { component(resource)}
        </Modal>
        
      </>
    );
  }
}

export default CustomModal;

// CustomModal.propTypes = {

// };