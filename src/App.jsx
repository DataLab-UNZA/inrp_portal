import {
  InstantSearch,
  Hits,
  RefinementList,
  Pagination,
  Configure,
  Stats,
} from 'react-instantsearch-hooks-web';

import HitView from './components/HitView';
import searchClient from './components/SearchClient';
import NavbarComp from './components/NavbarComp';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import './App.css';

const App = () => (
  <InstantSearch indexName="znrp" searchClient={searchClient}>
    <Container>
      <NavbarComp />
      <Row>
        <Col xs={3} className="d-none d-sm-block">
          <h5>Search By Institution</h5>
          <RefinementList attribute="Institution" />
          <h5>Search By Publication Type</h5>
          <RefinementList
            attribute="Publication Type"
            showMore
            searchable
            searchablePlaceholder="Filter publication types..."
          />
          <h5>Search By Publication Venue</h5>
          <RefinementList
            attribute="Publication Venue"
            showMore
            searchable
            searchablePlaceholder="Filter publication venue..."
          />
        </Col>
        <Col xs={9}>
          <Stats />
          <Configure hitsPerPage={5} />
          <Hits hitComponent={HitView} />
        </Col>
      </Row>

      <div className="d-flex justify-content-center">
        <Pagination />
      </div>
    </Container>

    <Container className="footer text-center py-4">
      <Row>
        <Col>
          <p className="mb-0">
            All rights reserved &copy; {new Date().getFullYear()} Zambia
            National Research Portal
          </p>
          <p className="mb-0">DataLab Research Group, University of Zambia</p>
          <p className="mb-0">Great East Road Campus</p>
          <p className="mb-0">Lusaka, Zambia</p>
        </Col>
      </Row>
    </Container>
  </InstantSearch>
);

export default App;
