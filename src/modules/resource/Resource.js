import React from 'react';

import Movie from './components/Movie';
import Show from './components/Show';
import Book from './components/Book';

class Resource extends React.Component {
  renderResource(resource) {
    switch(resource){
    case 'show':
      return <Show data={this.props.data} />;
    case 'movie':
      return <Movie data={this.props.data} />;
    case 'book':
      return <Book data={this.props.data} />;
    default:
      return null;
    }
  }
  render() {
    return this.renderResource(this.props.type);
  }
}

export default Resource;
