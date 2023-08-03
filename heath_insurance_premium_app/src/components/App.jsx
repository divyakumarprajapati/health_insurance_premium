import "./App.css";
import Header from "./Header";
import { Provider } from "react-redux";
import store from "../redux/store";
import HomePage from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";
import InitialPage from "./pages/InitialPage";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Header />
        <Routes>
          <Route path="/" element={<InitialPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/cart"></Route>
        </Routes>
      </Provider>
    </div>
  );
}

export default App;
