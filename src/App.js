import React, { Component } from "react";
import CardList from "./components/card-list/card-list.component"
import SearchBox from "./components/search-box/search-box.component";
import background from './resources/images/minecraft-bg.png'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobs: [],
      searchFilter: ''
    }
  };

  searchMob = event => {
    event.preventDefault();

    const searchFilter = event.target.value.toLowerCase();

    this.setState(() => {
      return {searchFilter}
    });
  }

  clearSearch = () => {
    this.setState(() => {
      return {searchFilter: ''}
    });
  }

  componentDidMount = async () => {
    const mobsResponse = await fetch('http://localhost:3500/api/monsters');
    const mobs = await mobsResponse.json();
    this.setState(() => {
      return {mobs: mobs}
    });
  }

  render() {
    const {mobs, searchFilter} = this.state;
    const {clearSearch, searchMob} = this;

    const filteredMobs = mobs.filter(mob => {
      return mob.name.toLocaleString().includes(searchFilter)
    });

    return <div id="App" className="container-fluid text-center" style={{
      backgroundImage: `url(${background})`,
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundAttachment: "fixed"
    }}>
      <div className="title-banner">
        <img id="minecraft-logo" src="/images/minecraft_logo_icon.png" alt="minecraft logo"/>
        <h1 id="app-title">Minecraft Monsters</h1>
      </div>

      <SearchBox
          id="mob-search-box"
          className="search-box"
          clearSearchHandler={clearSearch}
          searchHandler={searchMob}
          placeholder="Search mobs"/>

      <CardList
          id="mob-card-list"
          className="card-list"
          mobs={filteredMobs}/>

    </div>
  }
}

export default App;
