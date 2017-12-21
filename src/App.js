import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
const ABOUT = () => <h5>about</h5>
const HOME = () => <h1>HOME</h1>

const App = () => (
  <Router>
    <div>
      <Route path="/about" component={ ABOUT}/>
      <Route exact path="/" component={ HOME }/>
    </div>
  </Router>

);
export default App;
