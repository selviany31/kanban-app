import { useEffect } from "react";
import { Button, Form, Modal, Spinner } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { createDataTodos, getDataTodos } from "../../store/actions/todos";
import "./Header.css"

const FormTaskGroup = ({ show, close }) => {
    const dispatch = useDispatch()
    const { successCreate, loadingCreate } = useSelector((state) => state.todos)

    const { register, reset, handleSubmit } = useForm()

    const onSubmit = (data) => {
        dispatch(createDataTodos(data))
    }

    useEffect(() => {
        if(successCreate) {
            dispatch(getDataTodos())
            reset()
            close()
        }
    }, [dispatch, reset, close, successCreate])

    return (
        <Modal show={show} onHide={close} className="modal-custom">
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Modal.Header className="border-0 py-4">
                    <Modal.Title 
                        className="fw-bold" 
                        style={{ fontSize: "18px", lineHeight: "28px" }}
                    >
                        Add New Group
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                        <Form.Group className="mb-3">
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="text" {...register("title")}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Description</Form.Label>
                            <Form.Control type="text" as="textarea" {...register("description")}/>
                        </Form.Group>
                </Modal.Body>
                <Modal.Footer className="border-0">
                    <Button className="button-secondary fw-bold" onClick={close}>
                        Cancel
                    </Button>
                    <Button type="submit" className="button-primary fw-bold">
                        {loadingCreate ? <Spinner variant="light" size="sm" /> : 'Submit'}
                    </Button>
                </Modal.Footer>
            </Form>
        </Modal>
    );
}
 
export default FormTaskGroup;