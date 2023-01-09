import { Button, Form, Modal } from "react-bootstrap";

const FormTask = ({ show, close, title }) => {
    return ( 
        <Modal show={show} onHide={close} className="modal-custom">
            <Modal.Header className="border-0 py-4" closeButton>
                <Modal.Title 
                    className="fw-bold" 
                    style={{ fontSize: "18px", lineHeight: "28px" }}
                >
                    {title} Task
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Task Name</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>
                    <Form.Group className="w-50">
                        <Form.Label>Progress</Form.Label>
                        <Form.Control type="number" />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer className="border-0">
                <Button className="button-secondary fw-bold" onClick={close}>
                    Cancel
                </Button>
                <Button className="button-primary fw-bold" onClick={close}>
                    Save Task
                </Button>
            </Modal.Footer>
        </Modal>
    );
}
 
export default FormTask;