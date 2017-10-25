import React from 'react';
import s from './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

import Movies from './routes/movies/Movies';
import DescriptionMovie from './routes/movies/DescriptionMovie';
import Shows from './routes/shows/Shows';
import Books from './routes/books/Books';
import Music from './routes/music/Music';
import Sites from './routes/sites/Sites';
import Other from './routes/other/Other';
import Home from './routes/home/Home';

import {BrowserRouter as Router, Route} from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className={s.container}>
          <Header />
          <div className={s.content}>
            <Route exact path="/" component={Movies}/>
            <Route exact path="/peliculas" component={Movies}/>
            <Route path="/peliculas/:id" component={DescriptionMovie}/>
            <Route path="/series" component={Shows}/>
            <Route path="/libros" component={Books}/>
            <Route path="/musica" component={Music}/>
            <Route path="/sitios" component={Sites}/>
            <Route path="/otros" component={Other}/>
            <Route exact path="/sobre" component={Home}/>
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
