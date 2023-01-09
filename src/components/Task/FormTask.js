import { useEffect } from "react";
import { Button, Form, Modal, Spinner } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { createDataItems, getMultiItems, updateDataItems } from "../../store/actions/todos";

const FormTask = ({ show, close, title, id, idItem, name, progress_percentage }) => {
    const dispatch = useDispatch()
    const { successCreate, loadingCreate, todos } = useSelector((state) => state.todos)

    const { register, reset, handleSubmit } = useForm()

    const onSubmit = (data) => {
        if(title === 'Create') {
            dispatch(createDataItems({ id, data }))
        } else {
            dispatch(updateDataItems({ 
                id, 
                idItem, 
                data : {
                    ...data,
                    target_todo_id: id
                }
            }))
        }
    }

    useEffect(() => {
        if(successCreate) {
            dispatch(getMultiItems(todos))
            close()
            reset()
        }
    },[dispatch, successCreate, close, reset, todos])

    return ( 
        <Modal show={show} onHide={close} className="modal-custom">
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Modal.Header className="border-0 py-4" closeButton>
                    <Modal.Title 
                        className="fw-bold" 
                        style={{ fontSize: "18px", lineHeight: "28px" }}
                    >
                        {title} Task
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                        <Form.Group className="mb-3">
                            <Form.Label>Task Name</Form.Label>
                            <Form.Control 
                                type="text" 
                                {...register("name")}
                                defaultValue={title === 'Create' ? "" : name}
                            />
                        </Form.Group>
                        <Form.Group className="w-50">
                            <Form.Label>Progress</Form.Label>
                            <Form.Control 
                                type="number" 
                                {...register("progress_percentage")}
                                defaultValue={title === 'Create' ? "" : progress_percentage}
                            />
                        </Form.Group>
                </Modal.Body>
                <Modal.Footer className="border-0">
                    <Button className="button-secondary fw-bold" onClick={close}>
                        Cancel
                    </Button>
                    <Button 
                        type="submit"
                        className="button-primary fw-bold" 
                        >
                        {loadingCreate ? <Spinner variant="light" size="sm" /> : 'Save Task'}
                    </Button>
                </Modal.Footer>
            </Form>
        </Modal>
    );
}
 
export default FormTask;