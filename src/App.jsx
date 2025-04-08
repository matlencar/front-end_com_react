import "bootstrap/dist/css/bootstrap.min.css";
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import {
  Container
} from "reactstrap";


import './App.css';
import { Footer } from "./components/Footer";
import { Header } from './components/Header';
import { Home } from './components/Home';
import { Sobre } from "./components/Sobre";
import { Login } from "./components/Login";


export function App() {

  return (
    <Router>
      <div className="d-flex flex-column" style={{minHeight: "100vh"}}>
        <Header/>
        <Container className="flex-grow-1">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home/>} />
            <Route path="/pets" element={<Sobre />} />
          </Routes>
        </Container>
        <Footer />
      </div>
    </Router>
  );
}

// export default App