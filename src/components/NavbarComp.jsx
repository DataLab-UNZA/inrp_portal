import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { SearchBox } from 'react-instantsearch-hooks-web';
import './NavbarComp.css';

const NavbarComp = () => (
  <Navbar expand="lg">
    <Container>
      <Navbar.Brand href="/">Zambia National Research Portal</Navbar.Brand>
      <SearchBox className="search-box" placeholder="Type here to search..." />
    </Container>
  </Navbar>
);

export default NavbarComp;
