import React from 'react';
import s from './App.css';

const menuItems = [
  'Peliculas',
  'Series'
];

class App extends React.Component {
  render() {
    return (
      <div className={s.container}>
        <header>
          Diversidad Media
          <nav>{menuItems.map((item, i) => <li key={i}>{item}</li>)}</nav>    
        </header>
      </div>
    );
  }
}

export default App;
