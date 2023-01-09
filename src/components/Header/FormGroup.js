import { Button, Form, Modal } from "react-bootstrap";
import "./Header.css"

const FormTaskGroup = ({ show, close }) => {
    return (
        <Modal show={show} onHide={close} className="modal-custom">
            <Modal.Header className="border-0 py-4">
                <Modal.Title 
                    className="fw-bold" 
                    style={{ fontSize: "18px", lineHeight: "28px" }}
                >
                    Add New Group
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="text" as="textarea"/>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer className="border-0">
                <Button className="button-secondary fw-bold" onClick={close}>
                    Cancel
                </Button>
                <Button className="button-primary fw-bold" onClick={close}>
                    Submit
                </Button>
            </Modal.Footer>
        </Modal>
    );
}
 
export default FormTaskGroup;