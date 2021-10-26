import Container from "react-bootstrap/esm/Container";
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";


function Footer() {
    return (
      <div>
        <Container fluid style={{background:"#313035", color:"white"}}>
            <Row style={{padding:"3%"}}>
                <Col xs={2}>
                    Col1
                </Col>
                <Col xs={4}>
                    Col2
                </Col>
                <Col xs={6} style={{display:"flex",flexDirection:"row-reverse"}}>
                    <Button style={{background:"rgba(234,36,94)"}}>Contact Me</Button>
                </Col>
            </Row>
            <Row style={{padding:"3%",textAlign:"center",background:"grey"}}>
                <Col>
                    Col1
                </Col>
                <Col>
                    Col2
                </Col>
                <Col>
                    Col3
                </Col>
            </Row>
        </Container>
      </div>
    );
  }
  
  export default Footer;
  