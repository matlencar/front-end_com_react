import "bootstrap/dist/css/bootstrap.min.css";
import { Route, BrowserRouter as Router, Routes, Navigate } from 'react-router-dom';
import {
  Container
} from "reactstrap";


import './App.css';
import { Footer } from "./components/Footer";
import { Header } from './components/Header';
import { Home } from './components/Home';
import { Sobre } from "./components/Sobre";

import { Provider } from "react-redux";
import { Login } from "./components/Login";
import { store } from "./store";



export function App() {

  return (
    <Provider store={store}>
      <Router>
    <AppContent />
      </Router>
    </Provider>
  );
}

function AppContent() {

  // useEffect(() => {
  //   document.body.className = theme
  // }, [theme])

  return (
    <div className="d-flex flex-column" style={{minHeight: "100vh"}}>
         <Header/>
         <Container className="flex-grow-1">
         <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/pets" element={<Sobre />} />
        </Routes>

         </Container>
         <Footer />
       </div>    
  )
}
