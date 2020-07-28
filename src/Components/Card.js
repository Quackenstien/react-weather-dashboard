import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";

function CardForm() {
  //Protected API key
  const API_KEY = process.env.REACT_APP_API_KEY;

  //useState to take city input and build out query
  const [city, setCity] = useState();

  //Fetch function
  function handleFetchData() {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => console.log(data));
  }

  //Need to set up input field to search for specific params

  return (
    <Form>
      <Form.Group controlId="formBasicEmail">
        <Form.Control
          type="text"
          name="city"
          onChange={(e) => setCity(e.target.value)}
          placeholder="Search City"
        />
      </Form.Group>

      <Button onClick={handleFetchData} variant="primary">
        Submit
      </Button>
    </Form>
  );
}

export default CardForm;
