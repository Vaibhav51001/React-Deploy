import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Card from "react-bootstrap/Card";
import Data from "./movies.json";
import { useParams } from "react-router";

function SingleMovie() {
  const {movid} = useParams();
  return (
    <div style={{ background: "lightblue", padding: "8%" }}>
      <Container>
        <Row style={{ textAlign: "center" }}>
          {Data.map((mov) => {
            if (mov.id==movid) {
              return (
                <Col id={mov.id} xs={6} md={4} lg={3} style={{ marginBottom: "2%" }}>
                  <Card>
                    <Card.Img variant="top" src={mov.imageurl} />
                    <Card.Body>
                      <Card.Title>{mov.title}</Card.Title>
                      <Card.Text>{mov.genre}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              )
            }
          })}
        </Row>
      </Container>
    </div>
  );
}

export default SingleMovie;
