import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/esm/Container";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

function Registration() {
  const [emailID, setEmailId] = useState("");
  const [passwordd, setPasswordd] = useState("");
  const [username, setUsername] = useState("");

  function clearInput(){
    setEmailId("");
    setUsername("");
    setPasswordd("");
  }
  async function userPost(){
    const userDetails = {
      "username": username,
      "emailid": emailID,
      "password": passwordd
    }
    // console.log(userDetails);
    await axios.post('http://localhost:5000/users',userDetails)
    .then((data)=>{
      // console.log(data);
      Swal.fire({
        title: `<strong>Great! ${data.data.users.username}</strong>`,
        icon: 'success',
        showCloseButton: true,
      })
      clearInput();
    })
    .catch(
      (err)=>Swal.fire({
      title: `<strong>${err.message}</strong>`,
      icon: 'error',
      showCloseButton: true,
    }));
    // const response = await axios.post('http://localhost:5000/users',userDetails);
    // console.log(response.data);
    
  }

  return (
    <div style={{ background: "lightgreen", padding: "8%" }}>
      <Container>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Enter User Name</Form.Label>
            <Form.Control value={username} onChange={(e)=> setUsername(e.target.value)} type="email" placeholder="Enter User Name" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control value={emailID} onChange={(e)=> setEmailId(e.target.value)} type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control value={passwordd} onChange={(e)=> setPasswordd(e.target.value)} type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" onClick={userPost}>
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
}

export default Registration;
