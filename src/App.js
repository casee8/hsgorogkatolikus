import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import MainPage from "./pages/MainPage";
import About from "./pages/About";
import CommunityHouse from "./pages/CommunityHouse";
import History from "./pages/History";
import Calendar from "./pages/Calendar";
import Bible from "./pages/Bible";
import News from "./pages/News";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import "./App.css";
import ScrollToTop from "./ScrollToTop";

function App() {
  return (
    <Router>
      <div>
        <div className='for-footer'>
          <Navbar />
          <ScrollToTop />
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route exact path="/about" component={About} />
            <Route exact path="/history" component={History} />
            <Route exact path="/calendar" component={Calendar} />
            <Route exact path="/bible" component={Bible} />
            <Route exact path="/news" component={News} />
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
