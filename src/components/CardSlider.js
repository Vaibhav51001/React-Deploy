import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

function CardSlider() {
  return (
    <div style={{padding:"5%", background:"#f2f5f9"}}>
      <Carousel indicators={false} variant="dark">
        <Carousel.Item>
          <CardGroup style={{display:"flex", gap:"20px"}}>
            <Card
              className="bg-dark text-white"
              style={{ height: "300px", width: "300px", borderRadius: "5px" }}
            >
              <Card.Img src="./logo192.png" alt="Card image" style={{ height: "300px", width: "300px"}}/>
              <Card.ImgOverlay>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
                <Card.Text>Last updated 3 mins ago</Card.Text>
              </Card.ImgOverlay>
            </Card>
            <Card
              className="bg-dark text-white"
              style={{ height: "300px", width: "300px", borderRadius: "5px" }}
            >
              <Card.Img src="./logo192.png" alt="Card image" style={{ height: "300px", width: "300px"}}/>
              <Card.ImgOverlay>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
                <Card.Text>Last updated 3 mins ago</Card.Text>
              </Card.ImgOverlay>
            </Card>
            <Card
              className="bg-dark text-white"
              style={{ height: "300px", width: "300px", borderRadius: "5px" }}
            >
              <Card.Img src="./logo192.png" alt="Card image" style={{ height: "300px", width: "300px"}}/>
              <Card.ImgOverlay>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
                <Card.Text>Last updated 3 mins ago</Card.Text>
              </Card.ImgOverlay>
            </Card>
          </CardGroup>
        </Carousel.Item>
        <Carousel.Item>
        <CardGroup style={{display:"flex", gap:"20px"}}>
            <Card
              className="bg-dark text-white"
              style={{ height: "300px", width: "300px", borderRadius: "5px" }}
            >
              <Card.Img src="./logo192.png" alt="Card image" style={{ height: "300px", width: "300px"}}/>
              <Card.ImgOverlay>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
                <Card.Text>Last updated 3 mins ago</Card.Text>
              </Card.ImgOverlay>
            </Card>
            <Card
              className="bg-dark text-white"
              style={{ height: "300px", width: "300px", borderRadius: "5px" }}
            >
              <Card.Img src="./logo192.png" alt="Card image" style={{ height: "300px", width: "300px"}}/>
              <Card.ImgOverlay>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
                <Card.Text>Last updated 3 mins ago</Card.Text>
              </Card.ImgOverlay>
            </Card>
            <Card
              className="bg-dark text-white"
              style={{ height: "300px", width: "300px", borderRadius: "5px" }}
            >
              <Card.Img src="./logo192.png" alt="Card image" style={{ height: "300px", width: "300px"}}/>
              <Card.ImgOverlay>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
                <Card.Text>Last updated 3 mins ago</Card.Text>
              </Card.ImgOverlay>
            </Card>
          </CardGroup>
        </Carousel.Item>
        <Carousel.Item>
        <CardGroup style={{display:"flex", gap:"20px"}}>
            <Card
              className="bg-dark text-white"
              style={{ height: "300px", width: "300px", borderRadius: "5px" }}
            >
              <Card.Img src="./logo192.png" alt="Card image" style={{ height: "300px", width: "300px"}}/>
              <Card.ImgOverlay>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
                <Card.Text>Last updated 3 mins ago</Card.Text>
              </Card.ImgOverlay>
            </Card>
            <Card
              className="bg-dark text-white"
              style={{ height: "300px", width: "300px", borderRadius: "5px" }}
            >
              <Card.Img src="./logo192.png" alt="Card image" style={{ height: "300px", width: "300px"}}/>
              <Card.ImgOverlay>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
                <Card.Text>Last updated 3 mins ago</Card.Text>
              </Card.ImgOverlay>
            </Card>
            <Card
              className="bg-dark text-white"
              style={{ height: "300px", width: "300px", borderRadius: "5px" }}
            >
              <Card.Img src="./logo192.png" alt="Card image" style={{ height: "300px", width: "300px"}}/>
              <Card.ImgOverlay>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
                <Card.Text>Last updated 3 mins ago</Card.Text>
              </Card.ImgOverlay>
            </Card>
          </CardGroup>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CardSlider;
