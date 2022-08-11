import { useState, useEffect } from "react";
import CardList from "./components/card-list/card-list.component"
import SearchBox from "./components/search-box/search-box.component";
import background from './resources/images/minecraft-bg.png'
import './App.css';


const App = () => {

  const [searchFilter, setSearchFilter] = useState('');
  const [mobs, setMobs] = useState([]);
  const [filteredMobs, setFilteredMobs] = useState(mobs);

  console.log("rendered");

  useEffect(() => {
    fetch('http://localhost:3500/api/monsters')
        .then(response => response.json())
        .then(monsters => setMobs(monsters));
  }, []);


  useEffect(() => {
    const filteredMobs = mobs.filter(mob => {
      return mob.name.toLocaleString().includes(searchFilter)
    });
    setFilteredMobs(filteredMobs);
  }, [mobs, searchFilter])

  const searchMob = event => {
    const searchFilterString = event.target.value.toLowerCase();
    setSearchFilter(searchFilterString);
  }

  const clearSearch = event => {
    setSearchFilter('');
    document.getElementById(event.target.id).closest("form").querySelector("#search-box-input").value = '';
  }

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

export default App;
