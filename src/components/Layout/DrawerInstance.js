import React from 'react';
import { string, func, obj } from 'prop-types';
import { Drawer, List, Avatar, Divider, Col, Row, Button } from 'antd';


class DrawerInstance extends React.Component {

  render() {
    const { title, onClose, visible, component, resource, submit } = this.props
    return (
      <>
        <Drawer
          width={'50%'}
          placement="right"
          closable={true}
          title={title}
          onClose={onClose}
          visible={visible}
        >
          { component(resource)}
          <div
            style={{
              position: 'absolute',
              right: 0,
              bottom: 0,
              width: '100%',
              borderTop: '1px solid #e9e9e9',
              padding: '10px 16px',
              background: '#fff',
              textAlign: 'right',
            }}
          >
            <Button onClick={this.props.onClose} style={{ marginRight: 8 }}>
              Cancel
            </Button>
            {submit && (<Button onClick={this.onSubmit} type="primary">
              Submit
            </Button>) }
          </div>
        </Drawer>
        
      </>
    );
  }
}

export default DrawerInstance;

DrawerInstance.propTypes = {

};