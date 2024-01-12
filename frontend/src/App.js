import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

//pages & components
import Homelayout from "./components/Layout/Homelayout";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Homelayout>
        <Routes>
          <Route path="/" Component={Home} exact />
        </Routes>
      </Homelayout>
    </BrowserRouter>
  );
}

export default App;
