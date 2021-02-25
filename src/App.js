import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from "./componant/layout/Navbar";
import Home from "./componant/pages/Home";
import Contact from "./componant/pages/Contact";
import About from "./componant/pages/About";
import Error from "./componant/pages/Errorpage";
import AddUser from "./componant/users/Adduser";
import EditUser from "./componant/users/EditUser";
import UserView from "./componant/users/UserView";
import "../node_modules/bootstrap/dist/css/bootstrap.css";


function App() {
  return (
    <React.Fragment>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/about" component={About}></Route>
          <Route exact path="/contact" component={Contact}></Route>
          <Route exact path="/users/addusers" component={AddUser}></Route>
          <Route exact path="/users/edit/:id" component={EditUser}></Route>
          <Route exact path="/users/:id" component={UserView}></Route>
          <Route component={Error}></Route>
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
