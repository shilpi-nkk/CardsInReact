import React from "react";
import Card from "./Card";
import Contact from "../contacts";
function App() {
  return (
    <>
      <Card
        name={Contact[0].name}
        email={Contact[0].email}
        phone={Contact[0].phone}
        imgURL={Contact[0].imgURL}
      />
      <Card
        name={Contact[1].name}
        email={Contact[1].email}
        phone={Contact[1].phone}
        imgURL={Contact[1].imgURL}
      />
      <Card
        name={Contact[2].name}
        email={Contact[2].email}
        phone={Contact[2].phone}
        imgURL={Contact[2].imgURL}
      />
    </>
  );
}

export default App;
