import React from 'react';
import s from './DescriptionResource.css';
import {Link} from 'react-router-dom' 
import axios from 'axios';

class DescriptionResource extends React.Component {
  state = {
    resource: null
  }

  async componentWillMount() {
    const id = this.props.match.params.id;
    try {
        const {data:resource} = await axios.get(`/api/${this.props.type}/${id}`);
        this.setState({error: null, resource});
    } catch (e) {
        console.error(e);
        this.setState({error: e});
    }
  }

  render() {
    const {type} = this.props;
    const {error} = this.state;

    if (error) {
        return (
          <div className={s.error}>
            Hubo un error cargando los datos.
          </div>
        )
    }

    switch (type) {
      case 'show':
      case 'movie':
        return (
          <TmdbDescriptionResource
            type={type}
            resource={this.state.resource}
          />
        )
      case 'video':
        return (
          <YtDescriptionResource
            type={type}
            resource={this.state.resource}
          />
        )
      default:
        console.error(`Unexpected type ${type}`)
        return <div></div>
    }
  }
}

class TmdbDescriptionResource extends React.Component {
  renderGenres(genres) {
    return genres.map((gen, i) => {
      return `${gen.name}${genres.length -1 === i ? "" : ", "}`
    })
  }

  getParentByType(type) {
    switch(type) {
    case 'show':
      return 'Series';
    case 'movie':
      return 'Películas';
    default:
      return 'Películas';
    }
  }

  render() {
    const {type, resource} = this.props;

    if (!resource) {
      return null;
    }

    const title = resource.name ? resource.name : resource.title;

    return (
      <div>
        <h2 className={s.title}><Link to={`/${type}s`}>{this.getParentByType(type)}</Link> › {title}</h2>
          <div className={s.container}>
            <div className={s.backdrop} style={{
              backgroundImage: `url(http://image.tmdb.org/t/p/w500${resource.backdrop_path})`
            }}></div>

            <div className={s.side}>
              <img
                className={s.poster}
                src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${resource.poster_path}`} alt="Poster"/>
            </div>
            <div className={s.description}>
              <h2>{title}</h2>
              <ul>
                {resource.release_date && <li>{(resource.release_date).split('-')[0]}</li>}
                <li>{this.renderGenres(resource.genres)}</li>
                <li>{`${resource.vote_average} / 10`}</li>
              </ul>
              <p>
                {resource.overview}
              </p>
            </div>
          </div>
       </div>
    );
  }
}

class YtDescriptionResource extends React.Component {
  render() {
    const {type, resource} = this.props;

    if (!resource) {
      return null;
    }

    return (
      <div>
        <h2 className={s.title}><Link to={`/${type}s`}>Videos</Link> › {resource.snippet.title}</h2>
          <div className={s.container + ' ' + s.video}>
            <div className={s.backdrop} style={{background: "#ccc"}}></div>

            <div className={s.side}>
                <iframe title="YouTube video player" class="youtube-player" type="text/html" 
                    src={`http://www.youtube.com/embed/${resource.id}`}
                    frameborder="0" allowFullScreen className={s.videoThumbnail}></iframe>

            </div>
            <div className={s.description}>
              <h2>{resource.snippet.title}</h2>
              <p>
                {resource.snippet.description}
              </p>
            </div>
          </div>
       </div>
    );
  }
}

export default DescriptionResource;
