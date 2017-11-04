import React from 'react';
import s from './Resource.css';
import {Link} from 'react-router-dom';

class Resource extends React.Component {
  render() {
    const {type} = this.props;
    switch (type) {
      case 'show':
      case 'movie':
        return (
          <TmdbResource
            type={type}
            data={this.props.data}
            />
        )
      case 'video':
        return (
          <YtResource
            type={type}
            data={this.props.data}
            />
        )
      default:
        console.error(`Unexpected type ${type}`)
        return <div></div>
    }
  }
}

class TmdbResource extends React.Component {
  render() {
    const {type} = this.props;
    const {id, title, release_date, poster_path, vote_average} = this.props.data;
    return (
      <Link to={`/${type}/${id}`} className={s.movieContainer}>
        <div className={s.movie} style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w185_and_h278_bestv2${poster_path})`
        }}>
          <div className={s.coverOverlay}></div>
          <span className={s.rating}>{vote_average}</span>
        </div>
        <ul className={s.movieDescription}>
          <li className={s.movieName}>{title}</li>
          {release_date && <li className={s.movieYear}>{(release_date).split('-')[0]}</li>}
        </ul>
      </Link>
    );
  }
}

class YtResource extends React.Component {
  render() {
    const {snippet} = this.props.data;
    // TODO: create video detail page
    return (
      <a target="_blank" href={`https://youtu.be/${snippet.resourceId.videoId}`} className={s.youtubeContainer}>
        <div className={s.youtube} style={{
          backgroundImage: `url(${snippet.thumbnails.medium.url})`
        }}>
          <div className={s.coverOverlay}></div>
        </div>
        <ul className={s.movieDescription}>
          <li className={s.movieName}>{snippet.title}</li>
        </ul>
      </a>
    );
  }
}

export default Resource;
