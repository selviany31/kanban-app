import { useState } from "react";
import { Button, Container } from "react-bootstrap";
import FormTaskGroup from "./FormGroup";
import "./Header.css"

const Header = () => {
    const [show, setShow] = useState(false)
    return (
        <div className="header-custom">
            <Container fluid className="py-3 d-flex align-items-center">
                <h1 className="mb-0 fw-bold">Product Roadmap</h1>
                <Button 
                    className="fw-bold border-0"
                    onClick={() => setShow(true)}
                >
                    + Add New Group
                </Button>
            </Container>
            {show && <FormTaskGroup show={show} close={() => setShow(false)} /> }
        </div>
    );
}
 
export default Header;