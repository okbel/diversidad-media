import React from 'react';
import s from './Footer.css'

class Footer extends React.Component {
  render() {
    return (
      <footer className={s.footer}>
        Creado por <a className={s.creator}>@okbel</a> y colaboradores. 
        <small className={s.message}> Mandame un DM si encontrás algún problema o querés proponer un feature!</small>
      </footer>
    );
  }
}

export default Footer;
