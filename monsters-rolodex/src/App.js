import React, { Component } from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list.component";
class App extends Component {
 constructor() {
  super();
  this.state = {
   monsters: [],
   searchField: "33",
  };
 }
 componentDidMount() {
  fetch("http://jsonplaceholder.typicode.com/users")
   .then((response) => response.json())
   .then((users) => this.setState({ monsters: users }));
 }

 render() {
  return (
   <div className="App">
    <input type="search" placeholder="Search Monsters" onChange={(e) => this.setState({ searchField: e.target.value })} />
    <CardList monsters={this.state.monsters}></CardList>
   </div>
  );
 }
}
export default App;
