import React from "react";
import s from "./Home.css";

class Home extends React.Component {
  componentDidMount() {
    window.twttr.widgets.load();
  }
  render() {
    return (
      <div>
        <h2 className={s.title}>Sobre Diversidad Media</h2>
        <p className={s.description}>
          Hola! Acá vas a encontrar recursos sobre Diversidad. La idea es
          generar un espacio en el que encontremos recursos para exponernos a
          ambientes más diversos, ya sea mediante Películas, Libros, Musica,
          entre otros. El proyecto está en rápido crecimiento y hay muchas cosas
          por hacer. Estamos cubriendo lo básico todavia.
        </p>
        <div className={s.separator}>
          <h3 className={s.title}>Tenés ganas de contribuir?</h3>
          <div className={s.separator}>
            <h4> Sos desarrollador?</h4>
            <p>
              {" "}
              El código de Diversidad Media es libre y está alojado en Github.
              Este es el link del repo:
            </p>
            <a
              className={s.link}
              href="https://github.com/okbel/diversidad-media"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://github.com/okbel/diversidad-media
            </a>
          </div>
          <div className={s.separator}>
            <h4> Te gusta escribir sobre la comunidad LGBTIQ+ </h4>
            Unite a {` `}
            <a
              className={s.link}
              href="http://comunidad.diversidadmedia.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Comunidad Diversidad Media
            </a>
            {` `} y compartí una parte de vos!
          </div>
        </div>
        <div className={s.separator}>
          <h3 className={s.title}>Core Contributors</h3>
          <ul>
            <li>
              Belén Curcio{" "}
              <a className={s.link} href="https://twitter.com/okbel">
                @okbel
              </a>
            </li>
            <li>
              Fernanda Giustozzi{" "}
              <a className={s.link} href="https://twitter.com/ferferguson">
                @ferferguson
              </a>
            </li>
            <li>
              Daniela Herrera{" "}
              <a className={s.link} href="https://twitter.com/ohdaeni">
                @ohdaeni
              </a>
            </li>
          </ul>
        </div>
        <div className={s.separator}>
          <h3 className={s.title}>Historia</h3>
          <p>
            <a
              className={s.link}
              href="https://medium.com/@okbel/diversidad-media-e0783f3e20de"
              target="_blank"
              rel="noopener noreferrer"
            >
              Post en Medium
            </a>{" "}
            que cuenta la historia de Diversidad Media y la serie de tweets
            previo al desarrollo:
          </p>
          <blockquote className="twitter-tweet" data-lang="en">
            <p lang="es" dir="ltr">
              Te interesa la diversidad? Empezá a diversificar lo que consumís.
              Mirá algún documental gay en Netflix, por ejemplo. Empezá por
              algo.
            </p>&mdash; Belén Curcio (@okbel){" "}
            <a href="https://twitter.com/okbel/status/921114219025661953?ref_src=twsrc%5Etfw">
              October 19, 2017
            </a>
          </blockquote>
          <blockquote
            className="twitter-tweet"
            data-conversation="none"
            data-lang="en"
          >
            <p lang="es" dir="ltr">
              Esta es la lista colaborativa de Diversidad Media - Peliculas,
              Series, Sitios, etc.{" "}
              <a href="https://t.co/zgBX4Vh1Kx">https://t.co/zgBX4Vh1Kx</a>
            </p>&mdash; Belén Curcio (@okbel){" "}
            <a href="https://twitter.com/okbel/status/921207922339741696?ref_src=twsrc%5Etfw">
              October 20, 2017
            </a>
          </blockquote>
          <blockquote
            className="twitter-tweet"
            data-conversation="none"
            data-lang="en"
          >
            <p lang="es" dir="ltr">
              Y si querés agregar cosas a la lista{" "}
              <a href="https://t.co/z6U6PKh3hS">https://t.co/z6U6PKh3hS</a>{" "}
              😍😍😍😍😍
            </p>&mdash; Belén Curcio (@okbel){" "}
            <a href="https://twitter.com/okbel/status/921222205052043264?ref_src=twsrc%5Etfw">
              October 20, 2017
            </a>
          </blockquote>
        </div>
      </div>
    );
  }
}

export default Home;
