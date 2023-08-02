import './App.css';
import Header from './Header';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App(){
  return (
    <div className="App">
      <Header />
      <Row>
        <Col>1 of 2</Col>
        <Col>2 of 2</Col>
      </Row>
    </div>
  );
}

export default App;
