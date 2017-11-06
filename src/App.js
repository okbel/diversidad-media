import React from 'react';
import {Provider} from 'react-redux';
import {ApolloProvider} from 'react-apollo';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import client from './client';
import store from './store';

import s from './App.css';
import Home from './routes/home/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Movies from './routes/movies/Movies';
import Shows from './routes/shows/Shows';
import Videos from './routes/videos/Videos';
import Books from './routes/books/Books';
import Music from './routes/music/Music';
import Sites from './routes/sites/Sites';
import Other from './routes/other/Other';
import Missing from './components/Missing';
import DescriptionResource from './modules/resource/DescriptionResource';

class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
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
                  <Switch>
                    <Route exact path="/" component={Movies}/>

                    <Route exact path="/movies" component={Movies}/>
                    <Route path="/movie/:id" render={(props) => <DescriptionResource type="movie" {...props} />} />

                    <Route path="/shows" component={Shows}/>
                    <Route path="/show/:id" render={(props) => <DescriptionResource type="show" {...props}/>} />

                    <Route path="/videos" component={Videos}/>
                    <Route path="/books" component={Books}/>
                    <Route path="/music" component={Music}/>
                    <Route path="/sites" component={Sites}/>
                    <Route path="/other" component={Other}/>

                    <Route exact path="/about" component={Home}/>
                    <Route component={Missing}/>
                  </Switch>
                </div>
                <Footer />
              </div>
            </div>
          </Router>
        </Provider>
      </ApolloProvider>
    );
  }
}

export default App;
