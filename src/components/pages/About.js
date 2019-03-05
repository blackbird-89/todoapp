import React from "react";

export default function About() {
  return (
    <React.Fragment>
      <p style={aboutStyle}>This is a simple TodoList app.</p>
      <p> Code along with React crash course.</p>
    </React.Fragment>
  );

}

const aboutStyle ={
  paddingTop: "15px"
}