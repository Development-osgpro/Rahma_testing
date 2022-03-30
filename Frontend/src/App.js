import Homepage from "./Pages/Homepage";
import OurWork from './Pages/OurWork';
import ProgramsPage from "./Pages/ProgramsPage";
import RamadanPage from "./Pages/RamadanPage";

import {
  HashRouter as Router,
  Route,
} from 'react-router-dom'
import Home from "./Pages/Home";
import OurWorkAllPages from "./Pages/OurWorkAllPages";
import ContactPage from "./Pages/ContactPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={Home} />
        <Route exact path="/homepage" component={Homepage} />
        <Route path="/our-work" component={OurWork} />
        <Route exact path="/programs" component={ProgramsPage} />
        <Route exact path="/services/:id" component={OurWorkAllPages} />
        <Route exact path="/contact" component={ContactPage} />
        <Route exact path="/ramadan" component={RamadanPage} />
      </Router>
    </div>
  );
}

export default App;