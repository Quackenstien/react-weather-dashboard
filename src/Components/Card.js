import React from "react";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";

function CardForm() {
  //Set up fetch to call data from weather api
  function handleMe() {
    console.log("hi");
  }
  //Need to set up input field to search for specific params
  //Need to build and set state with retrieved information

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button onClick={handleMe}>Search</Button>
      </Card.Body>
    </Card>
  );
}

export default CardForm;
