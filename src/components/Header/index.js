import { Button, Container } from "react-bootstrap";
import "./Header.css"

const Header = () => {
    return (
        <div className="header-custom">
            <Container fluid className="py-3 d-flex align-items-center">
                <h1 className="mb-0 fw-bold">Product Roadmap</h1>
                <Button className="fw-bold border-0">+ Add New Group</Button>
            </Container>
        </div>
    );
}
 
export default Header;