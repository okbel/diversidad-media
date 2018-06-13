import React from 'react';
import {graphql} from 'react-apollo';
import gql from 'graphql-tag';

export default (document, config = {}) => (WrappedComponent) => {
  return class WithQuery extends React.Component {
    getWrapped = () => {
      return graphql(
        gql`${document}`,
        config,
      )(WrappedComponent);
    };

    render() {
      const Wrapped = this.getWrapped();
      return <Wrapped {...this.props} />;
    }
  }
};
