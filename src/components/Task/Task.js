import { Card, Dropdown, Image, ProgressBar } from "react-bootstrap";
import "./Task.css"
import SVG from "react-inlinesvg";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { createDataItems, deleteDataItems, getMultiItems } from "../../store/actions/todos";
import { Draggable } from "react-beautiful-dnd";
import DeleteComponent from "./Delete";
import FormTask from "./FormTask";

const TaskComponent = ({ id }) => {
    const dispatch = useDispatch()
    const { items, todos } = useSelector((state) => state.todos)
    const filterItem = items?.filter(item => item?.todo_id === id)
    const index = todos.findIndex( el => el.id === id )
    
    const [showDelete, setShowDelete] = useState(false)
    const [showEdit, setShowEdit] = useState(false)
    
    const handleMoveRight = (idItem, name, progress) => {
        dispatch(createDataItems({
            id: todos[index + 1]?.id,
            data: {
                name,
                progress_percentage: progress
            }
        }))

        dispatch(deleteDataItems({ id, idItem }))
    }

    const handleMoveLeft = (idItem, name, progress) => {
        dispatch(createDataItems({
            id: todos[index - 1]?.id,
            data: {
                name,
                progress_percentage: progress
            }
        }))

        dispatch(deleteDataItems({ id, idItem }))
    }

    useEffect(() => {
        dispatch(getMultiItems(todos))
    },[dispatch, todos])
    
    return ( 
        filterItem?.map((item, index) => (
            <Draggable
                key={item.id}
                draggableId={item.id.toString()}
                index={index}
                >
                {(provided, snapshot) => {
                    return (
                        <Card 
                            className="task" 
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                        >
                            <Card.Body>
                                <p className="fw-bold mb-0">{item?.name}</p>
                                <div className="separator separator-dashed mt-2 mb-2"></div>
                                <div 
                                    className={`d-flex justify-content-between align-items-center progress-bar-custom ${item?.progress_percentage === 100 ? "progress-done" : ""}`}
                                >
                                    <ProgressBar now={item?.progress_percentage} 
                                        style={{ height: "12px", width: "60%" }}
                                    />
                                    {item?.progress_percentage === 100 ? <Image src="icon/checklist.svg" /> : <p className="mb-0">{item?.progress_percentage}%</p>}
                                    <Dropdown className="dropdown-custom">
                                        <Dropdown.Toggle
                                            className="bg-white border-0 p-0 m-0 d-flex justify-content-end"
                                        >
                                        <Image src="icon/more.svg" />
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu className="menu border-0">
                                            <Dropdown.Item 
                                                onClick={() => handleMoveRight(item?.id, item?.name, item?.progress_percentage)} 
                                                className="d-flex align-items-center px-0 item-title"
                                                disabled={todos[todos.length -1]?.id === id}
                                            >
                                                <div style={{ width: "35px" }}>
                                                    <SVG src="icon/arrow-right.svg"/>
                                                </div>
                                                <span>Move Right</span>
                                            </Dropdown.Item>
                                            <Dropdown.Item 
                                                onClick={() => handleMoveLeft(item?.id, item?.name, item?.progress_percentage)}
                                                className="d-flex align-items-center px-0 item-title"
                                                disabled={todos[0]?.id === id}
                                            >
                                                <div style={{ width: "35px" }}>
                                                    <SVG src="icon/arrow-left.svg" />
                                                </div>
                                                <span className="item-title">Move Left</span>
                                            </Dropdown.Item>
                                            <Dropdown.Item onClick={() => setShowEdit(true)} className="d-flex align-items-center px-0 item-title">
                                                <div style={{ width: "35px" }}>
                                                    <SVG src="icon/edit.svg" />
                                                </div>
                                                <span className="item-title">Edit</span>
                                            </Dropdown.Item>
                                            <Dropdown.Item onClick={() => setShowDelete(true)} className="d-flex align-items-center px-0 item-title">
                                                <div style={{ width: "35px" }}>
                                                    <SVG  src="icon/trash.svg" />
                                                </div>
                                                <span className="item-title">Delete</span>
                                            </Dropdown.Item>
                                                {showDelete && 
                                                    <DeleteComponent 
                                                        show={showDelete} 
                                                        close={() => setShowDelete(false)}
                                                        id={id}
                                                        idItem={item?.id} 
                                                    /> 
                                                }
                                                {showEdit && 
                                                    <FormTask show={showEdit} 
                                                        close={() => setShowEdit(false)} 
                                                        title={"Edit"} 
                                                        id={id}
                                                        idItem={item?.id}
                                                        name={item?.name}
                                                        progress_percentage={item?.progress_percentage}
                                                    />
                                                }
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                            </Card.Body>
                        </Card>
                    );
                }}
            </Draggable>
        ))
    );
}
 
export default TaskComponent;