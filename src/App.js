import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import MainPage from "./components/MainPage";
import About from "./pages/About";
import CommunityHouse from "./pages/CommunityHouse";
import History from "./pages/History";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <div className='for-footer'>
          <Navbar />
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route exact path="/about" component={About} />
            <Route exact path="/history" component={History} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/communityhouse" component={CommunityHouse} />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
