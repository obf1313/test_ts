import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './../modules';

const render = () => {
  ReactDOM.render(
    <App />,
    document.querySelector('#app')
  );
};

render();
