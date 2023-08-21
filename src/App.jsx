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
        <h3>Search By Publication Venue</h3>
        <RefinementList 
          className="left-panel_refinement-list" 
          attribute="Publication Venue" 
          showMore 
          searchable 
          searchablePlaceholder="Filter publication venue..."
        />
      </div>

      <div className="right-panel">
        <Stats className="header_stats" />
        <Configure hitsPerPage={5} />
        <Hits hitComponent={HitView} /> 
        <Pagination />
      </div>
    </div>

    <div className="footer">
      <p>All rights reserved &copy; {new Date().getFullYear()} Zambia National Research Portal</p>
      <p>University of Zambia</p>
      <p>Great East Road Campus</p>
      <p>Lusaka, Zambia</p>
    </div>
  </InstantSearch>
);
 
export default App;
