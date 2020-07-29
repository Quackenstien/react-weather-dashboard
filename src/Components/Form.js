import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";

function InputForm() {
  //Protected API key
  const API_KEY = process.env.REACT_APP_API_KEY;

  //useState to take city input and build out query
  const [city, setCity] = useState();
  const [name, setName] = useState();
  const [temp, setTemp] = useState();

  //Fetch function
  const handleFetchData = (e) => {
    e.preventDefault();
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${API_KEY}`
    )
      .then((res) => res.json())
      // .then((data) => console.log(data));
      // console.log(data.name);
      .then((data) =>
        setName(data.name, console.log(data), setTemp(data.main.temp))
      );
  };

  //Need to set up input field to search for specific params

  return (
    <Form>
      <Form.Group>
        <Form.Control
          type="text"
          name="city"
          onChange={(e) => setCity(e.target.value)}
          placeholder="City"
        />
      </Form.Group>

      <Button onClick={handleFetchData} variant="primary">
        Search
      </Button>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>City: {name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
          <Card.Text>Temp: {temp}</Card.Text>
        </Card.Body>
      </Card>
    </Form>
  );
}

export default InputForm;
