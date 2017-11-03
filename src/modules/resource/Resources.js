import React from 'react';
import Resource from './Resource';
import LoadingResource from './LoadingResource';
import axios from 'axios';
import Paginate from '../../components/Paginate';
import queryString from 'query-string';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';

class Resources extends React.Component {
  state = {
    resources: [],
    totalPages: 0
  }

  componentWillMount() {
    this.fetchResources();
  }

  generateDelay = () => {
    return Math.random() * (7 - 0.10) + 0.10;
  }

  fetchResources = async (query = {}) => {
    const {type} = this.props;
    const {data: {results: resources, total_pages}} = await axios.get(`/api/${type}s?${queryString.stringify(query)}`);
    this.setState({
      resources,
      totalPages: total_pages
    });
  }

  pageClick = ({selected}) => {
    const page = selected + 1;
    this.fetchResources({page});
  }

  render() {
    const {type} = this.props;
    const {resources, totalPages} = this.state;

    if (!resources.length){
      return Array(12).fill({}).map((_, i) =>
        <LoadingResource key={i} delay={this.generateDelay()} />);
    }

    return (
      <div>
        {resources.map(resource => 
          <Resource 
            type={type}
            key={resource.id}
            data={resource}
          />)}
        <Paginate 
          pageCount={totalPages}
          onPageChange={this.pageClick}
        />
      </div>
    );
  }
}

Resources.propTypes = {
  type: PropTypes.oneOf([
    'show',
    'movie',
  ]),
};

const mapStateToProps = (state) => (state);

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators({}, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Resources);
