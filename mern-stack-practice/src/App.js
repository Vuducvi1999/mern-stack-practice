import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./component/navbar";
import CreateExercise from "./component/createExercise";
import Exercises from "./component/exercises";
import CreateUser from "./component/createUser";
import About from "./component/about";
import EditExercise from "./component/editExercise";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Switch>
          <Route path="/" exact component={About} />
          <Route path="/edit-exercise/:id" component={EditExercise} />
          <Route path="/exercises" component={Exercises} />
          <Route path="/create-exercise" component={CreateExercise} />
          <Route path="/create-user" component={CreateUser} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
