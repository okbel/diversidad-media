import React from 'react';
import s from './Footer.css'

class Footer extends React.Component {
  render() {
    return (
      <footer className={s.footer}>
        Creado con mucho <a className={s.creator}>amor</a>. 
        <small className={s.message}> Mandame un DM a <a className={s.creator}>@okbel</a> si encontrás algún problema o querés proponer un feature!</small>
      </footer>
    );
  }
}

export default Footer;
