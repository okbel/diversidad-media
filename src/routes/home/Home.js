import React from 'react';
import s from './Home.css';

class Home extends React.Component {
  render() {
    return (
      <div>
        <h2 className={s.title}>Sobre Diversidad Media</h2>
        <p className={s.description}>
          Hola! Acá vas a encontrar recursos sobre Diversidad. La idea es generar un espacio en el que encontremos recursos para exponernos a ambientes más diversos, ya sea mediante
          Películas, Libros, Musica, entre otros. 

          El proyecto está en rápido crecimiento y hay muchas cosas por hacer. Estamos cubriendo lo básico todavia.
        </p>
        <h3 className={s.title}>TODO LIST:</h3>

        <ul className={s.list}>
          <li>- Hacer el sitio accesible</li>
          <li>- Responsive coverage para la mayoria de dispositivos</li>
          <li>- Agregar links para cargar contenido</li>
          <li>- Que sea multilenguaje</li>
          <li> - Integración con Youtube, Spotify, Good Reads, etc</li>
        </ul>

        <h3 className={s.title}>Core Contributors</h3>

        <ul className={s.list}>
          <li>
            Belén Curcio <a className={s.link} href="https://twitter.com/okbel">@okbel</a>
          </li>
          <li>
            Fernanda Giustozzi <a className={s.link} href="https://twitter.com/ferferguson">@ferferguson</a>
          </li>
          <li>
            Daniela Herrera <a className={s.link} href="https://twitter.com/ohdaeni">@ohdaeni</a>
          </li>
        </ul>

        <h3 className={s.title}>Historia</h3>

        <blockquote className="twitter-tweet" data-lang="en"><p lang="es" dir="ltr">Te interesa la diversidad? Empezá a diversificar lo que consumís. Mirá algún documental gay en Netflix, por ejemplo. Empezá por algo.</p>&mdash; Belén Curcio (@okbel) <a href="https://twitter.com/okbel/status/921114219025661953?ref_src=twsrc%5Etfw">October 19, 2017</a></blockquote>


        <blockquote className="twitter-tweet" data-conversation="none" data-lang="en"><p lang="es" dir="ltr">Esta es la lista colaborativa de Diversidad Media - Peliculas, Series, Sitios, etc. <a href="https://t.co/zgBX4Vh1Kx">https://t.co/zgBX4Vh1Kx</a></p>&mdash; Belén Curcio (@okbel) <a href="https://twitter.com/okbel/status/921207922339741696?ref_src=twsrc%5Etfw">October 20, 2017</a></blockquote>


        <blockquote className="twitter-tweet" data-conversation="none" data-lang="en"><p lang="es" dir="ltr">Y si querés agregar cosas a la lista <a href="https://t.co/z6U6PKh3hS">https://t.co/z6U6PKh3hS</a> 😍😍😍😍😍</p>&mdash; Belén Curcio (@okbel) <a href="https://twitter.com/okbel/status/921222205052043264?ref_src=twsrc%5Etfw">October 20, 2017</a></blockquote>


      </div>
    );
  }
}

export default Home;
