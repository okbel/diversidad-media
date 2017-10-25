import React from 'react';
import s from './Footer.css'
import {Link} from 'react-router-dom'

class Footer extends React.Component {
  render() {
    return (
      <footer className={s.footer}>
        Creado con mucho <Link className={s.link} to="/sobre">amor</Link>. 
        <small className={s.message}> Mandame un DM a <a className={s.link} href="https://twitter.com/okbel">@okbel</a> si encontrás algún problema o querés proponer un feature!</small>
      </footer>
    );
  }
}

export default Footer;
