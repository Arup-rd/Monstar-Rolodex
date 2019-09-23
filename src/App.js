import React, { Component } from 'react';
import './App.css'
import { CardList } from './components/card-list/card-list.component'
import { SearchBox } from './components/search-box/search-box.component'
 
class App extends Component {

  constructor() {
    super();
    this.state = {
      monstars : [],
      searchField : ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(user => this.setState({ monstars : user }))
  }

  handlechange = e => {
    this.setState({ searchField : e.target.value })  
  }

  render() {

    const { monstars, searchField } = this.state;
    const filterMonsters = monstars.filter(monstar => 
      monstar.name.toLowerCase().includes(searchField.toLocaleLowerCase()))

    return (
      <div className="App">
        <h1>Monstars Rolodex</h1>
        <SearchBox 
            placeholder='search monstar'
            handlechange = { this.handlechange }
            />
        <CardList monstars= {filterMonsters}/>
      </div>
    );
  }
}

export default App;
