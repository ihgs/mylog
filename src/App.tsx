import React, { useEffect, useState } from 'react';
import './App.css';
import { Alert, Button, Container, Form, Row, Table } from 'react-bootstrap';
import Work  from './Work';
import moment from 'moment';
import Storage from './Storage';

function App() {

  const [work, setWork]  = useState(new Work());
  const [works, setWorks] = useState<Work[]>([]);
  const [status, setStatus] = useState('not_start');
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(()=>{
    const ws = Storage.getWorks();
    setWorks(ws);
  },[])

  const start = ()=> {
    const current = work.clone();
    current.start = new Date().getTime();
    setWork(current);
    setStatus('started');
  }

  const end = ()=> {
    if(work.comment.length === 0){
      setErrorMsg('comment is required');
      return;
    }else {
      setErrorMsg('');
    }
    const current = work.clone();
    current.end = new Date().getTime();
    const newWorks = [...works, current];
    setWorks(newWorks);
    Storage.saveWorks(newWorks);
    setWork(new Work());
    setStatus('not_start');
  }

  const endStart = ()=> {
    if(work.comment.length === 0){
      setErrorMsg('comment is required');
      return;
    } else {
      setErrorMsg('');
    } 
    const current = work.clone();
    current.end = new Date().getTime();
    const newWorks = [...works, current];
    setWorks(newWorks);
    Storage.saveWorks(newWorks);
    const newWork = new Work();
    newWork.start = new Date().getTime();
    setWork(newWork);
    setStatus('started');
    
  }

  const clear = () => {
    if(!window.confirm('All clear')){
      return;
    }
    Storage.clear();
    setWorks([]);
  }

  const removeRow = (index:number) => {
    works.splice(index, 1);
    const newWorks = [...works];
    setWorks(newWorks);
    Storage.saveWorks(newWorks);
    
  }
  

  const changeComment = (e: React.ChangeEvent<HTMLInputElement>) => {
    const current = work.clone();
    current.comment = e.target.value;
    setWork(current);    
  }

  const formatTime = (timestamp:number) =>{
    if( timestamp > 0) {
      return moment(timestamp).format('HH:mm')
    }
    return '';
  }


  const renderButton = () => {
    if(status === 'not_start'){
      return (
        <Button onClick={start}>Start</Button> 
      )
    } else {
      return (
        <div>
          <Button onClick={end}>End</Button>
          <Button onClick={endStart}>End&Start</Button>
        </div>
      )
    }
  }


  const renderList = ()=>{
    const list:JSX.Element[] = [];
    works.forEach((w,index)=>{
      list.push(
        <tr key={index}>
          <td>{w.comment}</td>
          <td>{ Math.round((w.end - w.start)/(60.0*60*1000)*10)/10}</td>
          <td>{formatTime(w.start)} - {formatTime(w.end)}</td> 
          <td><Button onClick={()=>{removeRow(index)}}>Remove</Button></td>
        </tr>
      )
    })
    return(
      <Table striped bordered>
        <tbody>
          {list}
        </tbody>
      </Table>
    )
  }

  return (
    <div className="App">
      <div>
        <Container>
          <Row>
            {errorMsg.length > 0 &&
            <Alert variant={'danger'}>
              {errorMsg}
            </Alert>
            }
          </Row>
          <Row>
            {renderButton()}
          </Row>
          <Row>
              <Form.Control onChange={changeComment} value={work.comment}></Form.Control>
          </Row>
          <Row>
          {work.comment} {formatTime(work.start)} - {formatTime(work.end)}
          </Row>
          <Row>
            {renderList()}
          </Row>
          <Row>
            <Button onClick={clear}>Clear</Button>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default App;
