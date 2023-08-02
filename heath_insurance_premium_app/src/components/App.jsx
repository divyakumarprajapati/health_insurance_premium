import "./App.css";
import Header from "./Header";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PremiumForm from "./FamilyDetailsForm/FamilyDetailsForm";

function App() {
  return (
    <div className="App">
      <Header />
      <Row>
        <Col>
          <PremiumForm />
        </Col>
        <Col>2 of 2</Col>
      </Row>
    </div>
  );
}

export default App;
