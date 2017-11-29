import React from 'react';
import ReactLoading from 'react-loading';

const Loading = () => (
  <div className="center">
    <h3>Please wait while we analyze your data.</h3>
    <ReactLoading type="spin" color="#0091EA" className="center" />
  </div>
);

export default Loading;
