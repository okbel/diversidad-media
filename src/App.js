import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import reducers from './reducers';

import s from './App.css';

import {Provider} from 'react-redux';
import createStore from './store';

import Header from './components/Header';
import Footer from './components/Footer';

import Movies from './routes/movies/Movies';

import Shows from './routes/shows/Shows';
import DescriptionResource from './modules/resource/DescriptionResource';

import Books from './routes/books/Books';
import Music from './routes/music/Music';
import Sites from './routes/sites/Sites';
import Other from './routes/other/Other';
import Home from './routes/home/Home';

const store = createStore(
  reducers,
);

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <div className={s.banner}>
              Estamos trabajando en la plataforma web. Para ver el listado completo de recursos hacé click 
              <a className={s.link} href="https://docs.google.com/spreadsheets/d/18Q3kTrNtTYUyscylEly5mMms_n9g_sj0IPdAnn-9EME/edit?usp=sharing" target="_blank" rel="noopener noreferrer">acá</a>.
            </div>
            <div className={s.container}>
              <Header />
              <div className={s.content}>
                <Route exact path="/" component={Movies}/>

                <Route exact path="/movies" component={Movies}/>
                <Route path="/movie/:id" render={(props) => <DescriptionResource type="movie" {...props} />} />

                <Route path="/shows" component={Shows}/>
                <Route path="/show/:id" render={(props) => <DescriptionResource type="show" {...props}/>} />

                <Route path="/books" component={Books}/>
                <Route path="/music" component={Music}/>
                <Route path="/sites" component={Sites}/>
                <Route path="/other" component={Other}/>

                <Route exact path="/about" component={Home}/>
              </div>
              <Footer />
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
