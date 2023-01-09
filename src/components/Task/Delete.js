import { useEffect } from "react";
import { Button, Image, Modal, Spinner } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteDataItems, getMultiItems } from "../../store/actions/todos";
import "./Task.css"

const DeleteComponent = ({ show, close, id, idItem }) => {
    const dispatch = useDispatch()
    const { successDelete, loadingDelete, todos } = useSelector((state) => state.todos)

    const handleDelete = () => {
        dispatch(deleteDataItems({ id, idItem  }))
    }

    useEffect(() => {
        if(successDelete) {
            dispatch(getMultiItems(todos))
            close()
        }
    },[dispatch, successDelete, close, todos])

    return ( 
        <Modal show={show} onHide={close} className="modal-custom">
            <Modal.Header className="border-0 py-4" closeButton>
                <Modal.Title 
                    className="fw-bold d-flex align-items-center" 
                    style={{ fontSize: "18px", lineHeight: "28px" }}
                >
                    <Image src="icon/warning.svg" />
                    <span style={{ marginLeft: "11px" }}>Delete Task</span>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="py-0">
                <p 
                    style={{ fontSize: "14px", lineHeight: "24px" }}
                    className="mb-0"
                >
                    Are you sure want to delete this task? your action can’t be reverted.
                </p>
            </Modal.Body>
            <Modal.Footer className="border-0">
                <Button className="button-secondary fw-bold" onClick={close}>
                    Cancel
                </Button>
                <Button 
                    className="button-danger fw-bold" 
                    onClick={handleDelete}>
                    {loadingDelete ? <Spinner variant="light" size="sm" /> : 'Delete'}
                </Button>
            </Modal.Footer>
        </Modal>
    );
}
 
export default DeleteComponent;