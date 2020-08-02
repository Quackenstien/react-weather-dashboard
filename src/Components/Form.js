import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function InputForm() {
  //Protected API key
  const API_KEY = process.env.REACT_APP_API_KEY;

  //useState to take city input and build out query
  const [city, setCity] = useState();
  const [name, setName] = useState();
  const [temp, setTemp] = useState();
  const [humidity, setHumidity] = useState();
  const [wind, setWind] = useState();
  const [icon, setIcon] = useState();
  const [des, setDes] = useState();

  //Fetch function
  const handleFetchData = (e) => {
    e.preventDefault();
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${API_KEY}`
    )
      .then((res) => res.json())
      // .then((data) => console.log(data));
      // console.log(data.name);
      .then((data) => {
        setName(data.name + ", " + data.sys.country);
        setTemp(data.main.temp + "° F");
        setHumidity(data.main.humidity + "% Humidity");
        setWind(data.wind.speed + " MPH Winds");
        setIcon(
          `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
        );
        setDes(data.weather[0].main);
        console.log(data);
      });
  };

  //Need to set up input field to search for specific params

  return (
    <Form>
      <Container>
        <Row>
          <Col md={{ span: 4, offset: 4 }}>
            <InputGroup className="mb-3">
              <Form.Control
                type="text"
                name="city"
                onChange={(e) => setCity(e.target.value)}
                placeholder="City"
              />
              <InputGroup.Append>
                <Button
                  onClick={handleFetchData}
                  type="submit"
                  variant="primary"
                >
                  Search
                </Button>
              </InputGroup.Append>
            </InputGroup>
          </Col>
        </Row>

        <Row>
          <Col md={{ span: 8, offset: 2 }} id="column">
            <Card id="outPut">
              <Card.Body id="crdColor">
                <div id="appText">
                  <h6 className="city">{name}</h6>
                  <h6 className="temp">{temp}</h6>
                  <h6 className="hum">{humidity}</h6>
                  <h6 className="wind">{wind}</h6>
                  <h6 className="icon">
                    {" "}
                    {des}
                    <img src={icon} />
                  </h6>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Form>
  );
}

export default InputForm;
