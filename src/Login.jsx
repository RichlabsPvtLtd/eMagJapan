import React, { useState } from "react";
import {
  Card,
  Button,
  Form,
  Container,
  Row,
  Col,
  Image,
} from "react-bootstrap";

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Simple authentication check for demonstration
    if (username === "Richlabs" && password === "richlabs") {
      onLogin(true);
    } else {
      alert("Wrong credentials!");
    }
  };

  return (
    <Container className="loginWrapper">
      <Row className="justify-content-md-center">
        <Col xs={12} md={6} className="text-center"></Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col xs={12} md={6}>
          <Card>
            <Card.Body>
              <Card.Title>
                <Image
                  src={require("./assets/japIndia.jpg")}
                  alt="Company Logo"
                  width="70"
                  height="70"
                />
                <h3>Japan India Consulting Co.</h3>
              </Card.Title>
              <hr />
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCompany">
                  <Form.Label>Company Name</Form.Label>
                  <Form.Control as="select" defaultValue="Choose...">
                    <option>Richlabs</option>
                  </Form.Control>
                </Form.Group>

                <hr />
                <div className="d-grid gap-2">
                  <Button variant="success" size="md" onClick={handleLogin}>
                    Login
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
