import './App.css';
import { Navbar, Nav, Container } from 'react-bootstrap'
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Project } from './components/Project';
import { Resume } from './components/Resume';

function App() {
  return (

    <BrowserRouter>
    <div className="App">
      <>
  <Navbar bg="dark" variant="dark">
    <Container>
    <Nav className="me-auto">
      <Nav.Link as={Link} to="/">About</Nav.Link>
      <Nav.Link as={Link} to="/project">Project</Nav.Link>
      <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
      <Nav.Link as={Link} to="/resume">Resume</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
      </>
      <div>
        <Routes>
          <Route path="/" element={<About/>}/>
          <Route path="/project" element={<Project/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/resume" element={<Resume/>}/>
        </Routes>
        </div>
      </div>
      </BrowserRouter>
  );
}

export default App;
