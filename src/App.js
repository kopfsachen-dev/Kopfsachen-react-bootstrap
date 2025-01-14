import './App.css';
import React from 'react'
import {LinkContainer} from 'react-router-bootstrap'
import { Button, ButtonGroup } from 'react-bootstrap';
import Registration from './components/Registration';

function App(props) {
  return (
    <div className="App">
      <h1>Schön, dass du da bist!</h1>

  <ButtonGroup className="mb-2">
    <LinkContainer to="/tagebuch">
      <Button variant="outline-secondary" size="lg">
        Ab zum Stimmungstagebuch!
      </Button>
    </LinkContainer>
  </ButtonGroup>
    <br/>

  <ButtonGroup className="mb-2">
    <Button variant="outline-secondary" size="lg">
      Ich möchte an meinen offenen Aufgaben weiterarbeiten
    </Button>
  </ButtonGroup>

  <Registration sessionActive={props.sessionActive} check={props.check}></Registration>


    </div>
  );
}

export default App;
