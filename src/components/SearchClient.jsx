import Client from '@searchkit/instantsearch-client';
import Searchkit from 'searchkit';

const sk = new Searchkit({
  connection: {
    host: 'http://13.51.206.147:9200',
  },
  search_settings: {
    search_attributes: ['Title', 'Authors', 'Institution', 'Abstract'],
    result_attributes: [
      'Title',
      'Authors',
      'Abstract',
      'Institution',
      'URL',
      'Publication Date',
    ],
    highlight_attributes: ['Title', 'Authors', 'Abstract', 'Institution'],
    snippet_attributes: ['Abstract'],
    facet_attributes: [
      { attribute: 'Authors', field: 'Authors', type: 'string' },
      { attribute: 'Institution', field: 'Institution', type: 'string' },
      {
        attribute: 'Publication Type',
        field: 'Publication Type',
        type: 'string',
      },
      {
        attribute: 'Publication Venue',
        field: 'Publication Venue',
        type: 'string',
      },
    ],
  },
});

const searchClient = Client(sk);
export default searchClient;
