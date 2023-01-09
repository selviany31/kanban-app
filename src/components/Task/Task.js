import { Card, Image, ProgressBar } from "react-bootstrap";
import "./Task.css"

const TaskComponent = () => {
    return ( 
        <Card className="task">
            <Card.Body>
                <p className="fw-bold mb-0">Re-designed the zero-g doggie bags. No more spills!</p>
                <div className="separator separator-dashed mt-2 mb-3"></div>
                <div className="d-flex justify-content-between align-items-center progress-bar-custom progress-done">
                    <ProgressBar now={60} 
                        style={{ height: "12px", width: "60%" }}
                    />
                    <p className="mb-0">60%</p>
                    <Image src="icon/more.svg" />
                </div>
            </Card.Body>
        </Card>
    );
}
 
export default TaskComponent;