import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Card from "react-bootstrap/Card";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";

function SingleMovieDb() {
  const {movid} = useParams();
  const [singleData,setsingleData] = useState([]);

    useEffect( 
        async () => {
            try {
                const response = await axios.get(`http://localhost:5000/movies/${movid}`);
                console.log(response);
                setsingleData([response.data]);
            } 
            catch (error) { 
                console.error(error);
            }
    }, []);
  return (
    <div style={{ background: "lightblue", padding: "8%" }}>
      <Container>
        <Row style={{ textAlign: "center" }}>
          {singleData.map((mov) => {
            if (mov._id==movid) {
              return (
                <Col id={mov._id} xs={6} md={4} lg={3} style={{ marginBottom: "2%" }}>
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

export default SingleMovieDb;
