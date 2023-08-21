import { Snippet, Highlight  } from 'react-instantsearch-hooks-web';
import './HitView.css';

const HitView = ({ hit }) => (
  <div className="hit-card">
    <h2 className="hit-title">
      <Highlight attribute="Title" hit={hit} />
    </h2>

    <div className="hit-details">
      <div className="hit-field">
        <strong>Author(s):</strong> <Highlight attribute="Authors" hit={hit} />
      </div>

      <div className="hit-field">
        <strong>Abstract:</strong> <Snippet attribute="Abstract" hit={hit} />...
      </div>

      <div className="hit-field">
        <strong>Institution:</strong> <Highlight attribute="Institution" hit={hit} />
      </div>

      <div className="hit-field">
        <strong>URL:</strong> <a href={hit.URL} target="_blank" rel="noopener noreferrer">{hit.URL}</a>
      </div>

      <div className="hit-field">
        <strong>Publication Date:</strong> {hit["Publication Date"]}
      </div>
    </div>
  </div>
);

export default HitView;
