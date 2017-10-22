import React from 'react';
import s from './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Movies from './routes/movies/Movies'

import {BrowserRouter as Router, Route} from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className={s.container}>
          <Header />
          <div className={s.content}>
            <Route path="/peliculas" component={Movies}/>
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
