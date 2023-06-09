import { Card, Container, Row, Col, Image } from "react-bootstrap"
import cocoImage from "../assets/images/favorite/coco.jpg.jpg"
import frozenlImage from "../assets/images/favorite/frozen.jpg.jpg"
import bigheroImage from "../assets/images/favorite/bighero.jpg.png"

const Favorite = () => {
    return (
        <div>
            <Container>
                <br />
                <h1 className="text-black">FILM FAVORITE</h1>
                <br />
                <Row>
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                            <Image src={cocoImage} alt="Coco Movie" className="images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">COCO</Card.Title>
                                    <Card.Text className="text-left">
                                        This is a wider card with supporting text below as a natural lead-in
                                        to additional content. This content is a little bit longer.
                                    </Card.Text>
                                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                            <Image src={frozenlImage} alt="Coco Movie" className="images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">FROZEN</Card.Title>
                                    <Card.Text className="text-left">
                                        This is a wider card with supporting text below as a natural lead-in
                                        to additional content. This content is a little bit longer.
                                    </Card.Text>
                                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                            <Image src={bigheroImage} alt="Coco Movie" className="images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">BIGHERO6</Card.Title>
                                    <Card.Text className="text-left">
                                        This is a wider card with supporting text below as a natural lead-in
                                        to additional content. This content is a little bit longer.
                                    </Card.Text>
                                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Favorite
