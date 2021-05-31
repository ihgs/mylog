import React, { useState } from 'react';
import './App.css';
import { Button, Container, Form, Row } from 'react-bootstrap';
import Work  from './Work';
import moment from 'moment';

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
    setWork(new Work());
    setStatus('not_start');
  }

  const endStart = ()=> {
    const current = work.clone();
    current.end = new Date().getTime();
    setWorks([...works, current]);
    const newWork = new Work();
    newWork.start = new Date().getTime();
    setWork(newWork);
    setStatus('started');
  }

  

  const changeComment = (e: React.ChangeEvent<HTMLInputElement>) => {
    const current = work.clone();
    current.comment = e.target.value;
    setWork(current);    
  }

  const formatTime = (timestamp:number) =>{
    if( timestamp !== -1) {
      return moment(timestamp).format('HH:mm')
    }
    return '';
  }

  const renderList = ()=>{
    const list:JSX.Element[] = [];
    works.forEach(w=>{
      list.push(
        <li key={w.start}>{ Math.round((w.end - w.start)/(60.0*60*1000)*10)/10} : {formatTime(w.start)} - {formatTime(w.end)}: {w.comment}</li>
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
              <div>
                <Button onClick={end}>End</Button>
                <Button onClick={endStart}>End&Start</Button>
              </div>

            }
          </Row>
          <Row>
              <Form.Control onChange={changeComment} value={work.comment}></Form.Control>
          </Row>
          <Row>
            {formatTime(work.start)} // {formatTime(work.end)}  {work.comment}
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
