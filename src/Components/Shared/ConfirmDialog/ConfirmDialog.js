import React from 'react';
import { Modal, Button } from 'react-bootstrap';

class ConfirmDialog extends React.Component {

  render() {
    const { show, onHideConfirmModal, submitConfirm, header } = this.props;
    return (
      <Modal
        show={show}
        onHide={onHideConfirmModal}
      >
        <Modal.Body className="no-padding">
          <h4 className="text-center">{header}</h4>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={onHideConfirmModal}>Close</Button>
          <Button bsStyle="primary" onClick={submitConfirm}>Submit</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}


export default ConfirmDialog;
