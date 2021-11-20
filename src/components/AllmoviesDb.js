import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Card from "react-bootstrap/Card";
import axios from "axios";
import {useState,useEffect} from "react";


function AllmoviesDb() {
    const [Data,setData] = useState([]);

    useEffect( 
        async () => {
            try {
                const response = await axios.get('https://deploy-react-api.herokuapp.com/movies');
                console.log(response);
                setData(response.data);
            } 
            catch (error) { 
                console.error(error);
            }
    }, []);
    
  return (
    <div style={{ background: "lightblue", padding: "8%" }}>
      <Container>
        <Row style={{ textAlign: "center" }}>
          {Data.map((mov) => (
            <Col onClick={()=>window.location.href="/movies/"+mov._id} id={mov._id} xs={6} md={4} lg={3} style={{ marginBottom: "2%" }}>
              <Card style={{cursor:"pointer"}}>
                <Card.Img variant="top" src={mov.imageurl} />
                <Card.Body>
                  <Card.Title>{mov.title}</Card.Title>
                  <Card.Text>
                    {mov.genre}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default AllmoviesDb;
