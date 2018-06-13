import React from "react";
import Resource from "./Resource";
import LoadingResource from "./LoadingResource";
import axios from "axios";
import Paginate from "../../components/Paginate";
import LoadMore from "../../components/LoadMore";
import queryString from "query-string";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import s from "./Resources.css";
import cn from "classnames";

class Resources extends React.Component {
  state = {
    resources: [],
    totalPages: 0,
    nextPage: ""
  };

  componentWillMount() {
    this.fetchResources();
  }

  generateDelay = () => {
    return Math.random() * (7 - 0.1) + 0.1;
  };

  fetchResources = async (query = {}) => {
    try {
      await this.doFetchResources(query);
    } catch (e) {
      console.error(e);
      this.setState({ error: e });
    }
  };

  doFetchResources = async (query = {}) => {
    const { type } = this.props;
    const {
      data: { results: resources, total_pages, next_page = "" }
    } = await axios.get(`/api/${type}s?${queryString.stringify(query)}`);

    if (type === "video") {
      this.setState(state => ({
        error: null,
        resources: [...state.resources, ...resources],
        totalPages: total_pages,
        nextPage: next_page
      }));
    } else {
      this.setState({
        error: null,
        resources,
        totalPages: total_pages
      });
    }
  };

  pageClick = async ({ selected }) => {
    const page = selected + 1;
    await this.fetchResources({ page });
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
  };

  loadMore = () => {
    const { nextPage } = this.state;

    this.fetchResources({
      pageToken: nextPage
    });
  };

  renderPaginationOrLoadMore = type => {
    const { nextPage } = this.state;
    if (type === "video") {
      return nextPage ? <LoadMore loadMore={this.loadMore} /> : null;
    } else {
      return (
        <Paginate
          pageCount={this.state.totalPages}
          onPageChange={this.pageClick}
        />
      );
    }
  };

  render() {
    const { type } = this.props;
    const { resources, error } = this.state;

    if (error) {
      return <div className={s.error}>Hubo un error cargando los datos.</div>;
    }

    if (!resources.length) {
      return Array(12)
        .fill({})
        .map((_, i) => (
          <LoadingResource key={i} delay={this.generateDelay()} />
        ));
    }

    return (
      <div className={cn(s.container, s[type])}>
        {resources.map(resource => (
          <Resource type={type} key={resource.id} data={resource} />
        ))}
        {this.renderPaginationOrLoadMore(type)}
      </div>
    );
  }
}

Resources.propTypes = {
  type: PropTypes.oneOf(["show", "movie", "video"])
};

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({}, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Resources);
