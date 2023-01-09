import { Card, Dropdown, Image, ProgressBar } from "react-bootstrap";
import "./Task.css"
import SVG from "react-inlinesvg";

const TaskComponent = () => {
    return ( 
        <Card className="task">
            <Card.Body>
                <p className="fw-bold mb-0">Re-designed the zero-g doggie bags. No more spills!</p>
                <div className="separator separator-dashed mt-2 mb-2"></div>
                <div className="d-flex justify-content-between align-items-center progress-bar-custom progress-done">
                    <ProgressBar now={60} 
                        style={{ height: "12px", width: "60%" }}
                    />
                    <p className="mb-0">60%</p>
                    <Dropdown className="dropdown-custom">
                        <Dropdown.Toggle
                            className="bg-white border-0 p-0 m-0 d-flex justify-content-end"
                        >
                        <Image src="icon/more.svg" />
                        </Dropdown.Toggle>

                        <Dropdown.Menu className="menu border-0">
                            <Dropdown.Item className="d-flex align-items-center px-0 item-title">
                                <div style={{ width: "35px" }}>
                                    <SVG src="icon/arrow-right.svg"/>
                                </div>
                                <span>Move Right</span>
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-1" className="d-flex align-items-center px-0 item-title">
                                <div style={{ width: "35px" }}>
                                    <SVG src="icon/arrow-left.svg" />
                                </div>
                                <span className="item-title">Move Left</span>
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-1" className="d-flex align-items-center px-0 item-title">
                                <div style={{ width: "35px" }}>
                                    <SVG src="icon/edit.svg" />
                                </div>
                                <span className="item-title">Edit</span>
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-1" className="d-flex align-items-center px-0 item-title">
                                <div style={{ width: "35px" }}>
                                    <SVG  src="icon/trash.svg" />
                                </div>
                                <span className="item-title">Delete</span>
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </Card.Body>
        </Card>
    );
}
 
export default TaskComponent;