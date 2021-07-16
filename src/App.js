import logo from './logo.svg';
import './App.css';


import React,{Component} from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './Components/MenuComponent';

import {DISHES} from "./shared/dishes";
import Main from './Components/MainComponent';


export class App extends Component {

  render() {
    return (
      <div className="App">
        <Main />
      </div>
    );
  }
}
export default App;
