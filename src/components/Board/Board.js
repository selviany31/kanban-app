import { Button, Card, Image } from "react-bootstrap";
import "./Board.css"

const BoardComponent = () => {
    return (
        <Card 
            className="card-custom"
            style={{ 
                width: '18rem', 
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
                    <p className="subtitle fw-bold">January - March</p>
                    <Button className="bg-transparent border-0 d-flex align-items-center ps-0">
                        <Image src="icon/add.svg" />
                        <span className="text-black subtitle ms-2">New Task</span>
                    </Button>
                </Card.Text>
            </Card.Body>
        </Card>
    );
}
 
export default BoardComponent;