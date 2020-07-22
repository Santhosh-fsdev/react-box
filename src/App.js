import React from "react";
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import Middle from "./components/Middle";
import Top from "./components/Top";
import Notes from "./components/Notes";
import Individual from "./components/Individual";
import { BrowserRouter as Router, Route} from 'react-router-dom';

export default function App() {
  
    return (
      <Router>
        <Top />
        <Route exact path="/" component={Middle} />
        <Route path="/notes" component={Notes} />
        <Route path="/find/:name" component={Individual} />
        </Router>
    );
  }
