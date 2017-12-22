import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

const Examples = () => <h5>examples</h5>
const About = () => <h5>about</h5>
const Home = () => <h1>HOME</h1>

const App = () => (
  <Router>
    <div>
      <Route path="/examples" component={ Examples}/>
      <Route path="/about" component={ About}/>
      <Route exact path="/" component={ Home }/>
    </div>
  </Router>
);

export default App;
