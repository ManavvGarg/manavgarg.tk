import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import './css/style.css'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
            <Route path="/" exact>
                <Home />
            </Route>
            
            <Route path="/about" exact>
                <About />
            </Route>
            
            <Route path="/projects" exact>
                <Projects />
            </Route>
            
            <Route path="/contact" exact>
                <Contact />
            </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
