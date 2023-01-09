import { Droppable } from "react-beautiful-dnd";
import { Button, Card, Image } from "react-bootstrap";
import TaskComponent from "../Task/Task";
import "./Board.css"

const BoardComponent = ({ id, title, desc, bgColor, brdColor, txtColor }) => {
    return (
        <Card 
            className="card-custom"
            style={{ 
                maxWidth: '18rem', 
                border: `1px solid ${brdColor}`, 
                background: bgColor, 
            }}
        >
            <Card.Body>
                <Card.Title 
                    className="title"
                    style={{ 
                        border: `1px solid ${brdColor}`,
                        color: txtColor,
                    }}
                >
                    {title}
                </Card.Title>
                <Card.Text>
                    <p className="subtitle fw-bold mb-2">{desc}</p>
                    {/* <TaskComponent /> */}
                    <Droppable droppableId={id} key={id}>
                        {(provided, snapshot) => {
                            return (
                            <div
                                {...provided.droppableProps}
                                ref={provided.innerRef}
                                // style={{
                                // background: snapshot.isDraggingOver
                                //     ? "lightblue"
                                //     : "lightgrey",
                                // padding: 4,
                                // width: 250,
                                // minHeight: 500
                                // }}
                            >
                                {/* <CardTodo id={todo?.id} /> */}
                                <TaskComponent id={id} />
                            </div>
                            );
                        }}
                </Droppable>
                    <Button className="bg-transparent border-0 d-flex align-items-center p-0 mt-2">
                        <Image src="icon/add.svg" />
                        <span className="text-black subtitle ms-2">New Task</span>
                    </Button>
                </Card.Text>
            </Card.Body>
        </Card>
    );
}
 
export default BoardComponent;