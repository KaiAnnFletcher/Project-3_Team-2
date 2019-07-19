import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/HomePage";
import Search from "./pages/Search";
import UserPage from "./pages/UserPage";
import UserBookmarkPage from "./pages/UserBookmarkPage";
import Wrapper from "./components/Wrapper";
import Widget from "./components/Widget";
import RecipeSelect from "./pages/RecipeSelect";


class App extends Component {
  render() {
    return (
      <div>
        <div id='splash'>
          <div id='bars'>
            <div className='bar'></div>
            <div className='bar'></div>
            <div className='bar'></div>
            <div className='bar'></div>
            <div className='bar'></div>
            <div className='bar'></div>
            <div className='bar'></div>
            <div className='bar'></div>
            <div className='bar'></div>
            <div className='bar'></div>
            <div className='bar'></div>
            <div className='bar'></div>
            <div className='bar'></div>
            <div className='bar'></div>
            <div className='bar'></div>
            <img alt="logo" id="Apptitle" src="https://i.ibb.co/JjXYSBh/logo.png"></img>
          </div>

        </div>


        <div id='App'>
          <Router>
            <div>
              <Navbar />
              <Wrapper>
                <Route exact path="/" component={Home} />
                <Route exact path="/Search" component={Search} />
                <Widget />
                <Route exact path="/UserPage" component={UserPage} />
                <Route exact path="/RecipeSelect/:id" component={RecipeSelect} />
                <Route exact path="/UserBookmarkPage/:user" component={UserBookmarkPage} />
              </Wrapper>
            </div>
          </Router>
          <Footer />
        </div>

      </div >
    );
  }
}





export default App;