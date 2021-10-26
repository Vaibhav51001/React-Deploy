import "./App.css";
import Header from "./components/Header/Header";
import Sliderimg from "./components/Sliderimg";
import CardSlider from "./components/CardSlider";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Allmovies from "./components/Allmovies";
// import SingleMovie from "./components/SingleMovie";
import AllmoviesDb from "./components/AllmoviesDb";
import SingleMovieDb from "./components/SingleMovieDb";
import Registration from "./components/Registration";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/">
            <Sliderimg />
            <CardSlider />
            Hello React
          </Route>
          <Route exact path="/Movies">
            {/* Exact keyword is use to manage routes when this rout "/" is on top respect to other rout. */}
            <AllmoviesDb /> { /* <Allmovies /> */}
          </Route>
          <Route exact path="/Movies/:movid">
            <SingleMovieDb /> { /* <Singlemovie /> */}
          </Route>
          <Route exact path="/Register">
            {/* Exact keyword is use to manage routes when this rout "/" is on top respect to other rout. */}
            <Registration /> { /* <Allmovies /> */}
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
