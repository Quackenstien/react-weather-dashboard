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
  const [humidity, setHumidity] = useState();
  const [wind, setWind] = useState();

  //Fetch function
  const handleFetchData = (e) => {
    e.preventDefault();
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&appid=${API_KEY}`
    )
      .then((res) => res.json())
      // .then((data) => console.log(data));
      // console.log(data.name);
      .then((data) =>
        setName(
          data.city.name,
          console.log(data),
          setTemp(data.list[0].main.temp),
          setHumidity(data.list[0].main.humidity),
          setWind(data.list[0].wind.speed)
        )
      );
  };

  //Need to set up input field to search for specific params

  return (
    <Form>
      <Form.Group>
        <Form.Control
          id="inputBox"
          style={{ width: "18rem" }}
          type="text"
          name="city"
          onChange={(e) => setCity(e.target.value)}
          placeholder="City"
        />
      </Form.Group>

      <Card id="outPut" style={{ width: "18rem" }}>
        <Card.Body id="crdColor">
          <div id="appText">
            <h6>City: {name} </h6>
            <h6>Temp: {temp} </h6>
            <h6>Humidity: {humidity} </h6>
            <h6>Wind Speed: {wind} </h6>
          </div>
        </Card.Body>

        <Button id="btn" onClick={handleFetchData} variant="primary">
          Search
        </Button>
      </Card>
    </Form>
  );
}

export default InputForm;
