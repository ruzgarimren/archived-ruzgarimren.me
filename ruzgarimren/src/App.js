import Portfolio from './portfolio.jpg';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './App.css';
import { colors } from 'debug/src/browser';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={Portfolio} className="App-logo" alt="logo" />
        <h3>Ruzgar Imren</h3>
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container className="Navbar-Container">
            <Navbar.Brand id="Navbar-Home" href="#home">Home</Navbar.Brand>
            <Navbar.Brand id="Navbar-Videos" href="#vidoes">Videos</Navbar.Brand>
            <Navbar.Brand id="Navbar-Projects" href="#vidoes">Projects</Navbar.Brand>
          </Container>

        </Navbar>
      </header>
    </div>
  );
}

export default App;
