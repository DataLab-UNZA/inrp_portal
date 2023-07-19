import { 
  InstantSearch, 
  SearchBox, Hits, 
  RefinementList, 
  Pagination,
  Configure,
  Stats,
} from "react-instantsearch-hooks-web";

import HitView from './components/HitView'
import searchClient from './components/SearchClient'

import "./App.css"

const App = () => (
  <InstantSearch indexName="znrp" searchClient={searchClient}>
    <div className="header">
      <div>
        <a href="/"><h1>Zambia National Research Portal</h1></a>
        <Stats className="header_stats" />
      </div>
      <SearchBox placeholder="Type here to search..." />
    </div>

    <div className="main-content">
      <div className="left-panel">
        <h3>Search By Institution</h3>
        <RefinementList className="left-panel_refinement-list" attribute="Institution" />

        <h3>Search By Publication Type</h3>
        <RefinementList 
          className="left-panel_refinement-list" 
          attribute="Publication Type" 
          showMore 
          searchable 
          searchablePlaceholder="Filter publication types..."
        />

        <h3>Search By Authors</h3>
        <RefinementList 
          className="left-panel_refinement-list" 
          attribute="Authors" 
          showMore 
          searchable
          searchablePlaceholder="Filter authors..."
        />
      </div>

      <div className="right-panel">
        <Configure hitsPerPage={5} />
        <Hits hitComponent={HitView} /> <Pagination />
      </div>
    </div>
  </InstantSearch>
);
 
export default App;
