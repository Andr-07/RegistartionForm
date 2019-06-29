import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';


const Index = () => (
<div>
  <App appName='RegistrationForm'/>
  </div>
);

ReactDOM.render(<Index />, document.getElementById('react-app'));
