import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {FirstApp} from './components/FirstApp';
import Cards from './components/Cards';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css/animate.min.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FirstApp/>
  </React.StrictMode>,
)
