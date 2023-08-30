import { Snippet, Highlight } from 'react-instantsearch-hooks-web';
import { Container, Row, Col } from 'react-bootstrap';
import './HitView.css';

const HitView = ({ hit }) => (
  <Container className="hit-container">
    <Row>
      <Col>
        <h4 className="hit-title">
          <Highlight attribute="Title" hit={hit} />
        </h4>
      </Col>
    </Row>
    <Row>
      <Col>
        <strong>Author(s): </strong> <Highlight attribute="Authors" hit={hit} />
      </Col>
    </Row>
    <Row>
      <Col>
        <strong>Institution: </strong>
        <Highlight attribute="Institution" hit={hit} />
      </Col>
    </Row>
    <Row>
      <Col>
        <strong>Abstract: </strong> <Snippet attribute="Abstract" hit={hit} />
      </Col>
    </Row>
    <Row>
      <Col>
        <strong>URL: </strong>
        <a href={hit.URL} target="_blank" rel="noopener noreferrer">
          {hit.URL}
        </a>
      </Col>
    </Row>
    <Row>
      <Col>
        <strong>Publication Date: </strong> {hit['Publication Date']}
      </Col>
    </Row>
  </Container>
);

export default HitView;
