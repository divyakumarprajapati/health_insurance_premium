import "./App.css";
import Header from "./Header";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FamilyDetailsForm from "./FamilyDetailsForm/FamilyDetailsForm";
import PremiumPlanTable from "./PremiumPlanTable/PremiumPlanTable";

function App() {
  return (
    <div className="App">
      <Header />
      <Row>
        <Col>
          <FamilyDetailsForm />
        </Col>
        <Col>
          <PremiumPlanTable />
        </Col>
      </Row>
    </div>
  );
}

export default App;
