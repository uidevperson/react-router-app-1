import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

const HOME = () => <h1>HOME</h1>

const App = () => (
  <Router>
    <Route path="/" component={ HOME }/>
  </Router>

);
export default App;
