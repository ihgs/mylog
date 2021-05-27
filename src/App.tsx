import React, { useState } from 'react';
import './App.css';
import { Button, Container, Form, Row } from 'react-bootstrap';
import Work  from './Work';

function App() {

  const [work, setWork]  = useState(new Work());
  const [works, setWorks] = useState<Work[]>([]);
  const [status, setStatus] = useState('not_start');

  const start = ()=> {
    const current = work.clone();
    current.start = new Date().getTime();
    setWork(current);
    setStatus('started');
  }

  const end = ()=> {
    const current = work.clone();
    current.end = new Date().getTime();
    setWorks([...works, current]);
    console.log(works)
    setWork(new Work());
    setStatus('not_start');
  }

  const renderList = ()=>{
    const list:JSX.Element[] = [];
    works.forEach(w=>{
      list.push(
        <li key={w.start}>{w.start} - {w.end}</li>
      )
    })
    return(
      <ul>
        {list}
      </ul>
    )
  }

  return (
    <div className="App">
      <div>
        <Container>
          <Row>
            {
              status === 'not_start' 
              && 
              <Button onClick={start}>Start</Button> 
              ||
              <Button onClick={end}>End</Button>
            }
          </Row>
          <Row>
              <Form.Control></Form.Control>
          </Row>
          <Row>
            {work.start} // {work.end}
          </Row>
          <Row>
            {renderList()}
          </Row>

        </Container>
      </div>
    </div>
  );
}

export default App;
