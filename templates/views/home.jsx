import React from 'react';
import Default from '../layouts/default';

const Index = (props) => {
  return (
    <Default {...props}>
      <div className="container">
        <div className="jumbotron">
          <img src="/images/logo.svg" width="160" />
          <h1>Welcome Home</h1>
        </div>
      </div>
    </Default>
  );
};


// React Engine needs exports, don't export default
module.exports = Index;
