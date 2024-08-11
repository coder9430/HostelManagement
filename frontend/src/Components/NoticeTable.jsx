import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { FaEnvelope } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

function NoticeTable() {
  const [show, setShow] = useState(false);
  const [selectedMessage, setSelectedMessage] = useState('');

  const handleShow = (message) => {
    setSelectedMessage(message);
    setShow(true);
  };

  const handleClose = () => setShow(false);

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Select</th>
            <th scope="col">#</th>
            <th scope="col">From</th>
            <th scope="col">Message</th>
            <th scope="col">Time</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
          <td>
              <input type="checkbox" />
            </td>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>
              <FaEnvelope onClick={() => handleShow('Full message from Mark Otto')} style={{ cursor: 'pointer' }} />
            </td>
          </tr>
          <tr>
            <td>
              <input type="checkbox" />
            </td>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>
              <FaEnvelope onClick={() => handleShow('Full message from Jacob Thornton')} style={{ cursor: 'pointer' }} />
            </td>
          </tr>
        </tbody>
      </table>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Message</Modal.Title>
        </Modal.Header>
        <Modal.Body>{selectedMessage}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default NoticeTable;
