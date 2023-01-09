import { Button, Card, Image } from "react-bootstrap";
import TaskComponent from "../Task/Task";
import "./Board.css"

const BoardComponent = () => {
    return (
        <Card 
            className="card-custom"
            style={{ 
                maxWidth: '18rem', 
                border: "1px solid #01959F", 
                background: "#F7FEFF", 
            }}
        >
            <Card.Body>
                <Card.Title 
                    className="title"
                    style={{ 
                        border: "1px solid #4DB5BC",
                        color: "#01959F",
                    }}
                >
                    Card Title
                </Card.Title>
                <Card.Text>
                    <p className="subtitle fw-bold mb-2">January - March</p>
                    <TaskComponent />
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