import "./App.css";
import Header from "./Header";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FamilyDetailsForm from "./family_details_form/FamilyDetailsForm";
import PremiumPlan from "./premium_plan_table/PremiumPlan";
import { Provider } from "react-redux";
import store from "../redux/store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Header />
        <Row>
          <Col>
            <FamilyDetailsForm />
          </Col>
          <Col>
            <PremiumPlan />
          </Col>
        </Row>
      </Provider>
    </div>
  );
}

export default App;
