import { Navbar, Container, Nav } from "react-bootstrap"

const NavigationBar = () => {
    return (
        <div>
            <Navbar variant="dark">
                <Container>
                    <Navbar.Brand>DaftarFilm</Navbar.Brand>
                    <Nav>
                        <Nav.Link>FAVORITE</Nav.Link>
                        <Nav.Link>KARTUN</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavigationBar