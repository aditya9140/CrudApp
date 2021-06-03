import React from 'react';
import './App.css';
import  "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/layout/Navbar';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import notfound from './components/notfound';
import AddUsers from './components/users/AddUsers';
import EditUser from "./components/users/EditUser";
import User from "./components/users/User";


function App() {
  return (
    <Router>
    <div className="App">
       <Navbar/>
       <Switch>
         <Route exact path="/" component={Home}/>
         <Route exact path="/about" component={About}/>
         <Route exact path="/contact" component={Contact}/>
         <Route exact path="/users/add" component={AddUsers}/>
         <Route exact path="/users/edit/:id" component={EditUser} />
          <Route exact path="/users/:id" component={User} />
         <Route component={notfound}/>
         </Switch>
    </div>
    </Router>
  );
}

export default App;
