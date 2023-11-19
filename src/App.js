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
            <Navbar.Brand id="Navbar-Home" href="/home">Home</Navbar.Brand>
            <Navbar.Brand id="Navbar-Videos" href="/videos">Videos</Navbar.Brand>
            <Navbar.Brand id="Navbar-Projects" href="/projects">Projects</Navbar.Brand>
          </Container>
        </Navbar>
      </header>
      <section className="Paragraph">
        <h2>Hello!</h2>
        <p>
        Hello!
        I'm Brian, a software developer and educator living in Boston, Massachusetts.

        I run Spanning Tree, a video series teaching topics in computer science and mathematics.

        At Harvard University, I've created and taught courses about artificial intelligence and web programming. I've also been a course head for CS50, Harvard's introductory course in computer science, and a co-instructor for CS51, Harvard's course on abstraction and design in computing.

        I currently work at Byteboard, developing a more accurate and equitable process for engineering hiring. I've worked previously at Automattic, Palantir, and the National Speech and Debate Association.

        I graduated from Harvard College in 2019 with a degree in computer science and linguistics and from Harvard Graduate School of Education in 2021 with a master's degree in technology, innovation, and education.

        Contact me at brian@brianyu.me.
        </p>

      </section>
    </div>
  );
}

export default App;
