import React, {Component} from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import CardList from './components/CardList'
import SearchBox from './components/SearchBox/SearchBox'
import { robots }  from './components/robots'
import 'tachyons';


class App extends Component {
  constructor(){
    super()
    this.state={
      robots: robots,
      filter: 'filterByName',
      searchfield: ''
    }
  }

  onFilterChange = (event) => {
    this.setState({filter: event.target.value})
  }

  onSearchChange = (event) => {
    this.setState({searchfield: event.target.value})
  }

  loadRobot = (data) => {
    this.setState({robots: data})
  }

  render(){
    // eslint-disable-next-line
    const filterRobots = this.state.robots.filter(robot => {
      if(this.state.filter==='filterByName'){
        return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
      } else if(this.state.filter==='filterByJob'){
        return robot.job.toLowerCase().includes(this.state.searchfield.toLowerCase())
      }
    })
    return (
      <div className='App'>
       <NavBar loadRobot={this.loadRobot} />
       <div id='mainContent' className='tc'>
          <h1 className='f1-ns'>RoboFriends</h1>
          <SearchBox filterChange = {this.onFilterChange} searchChange = {this.onSearchChange} />
          <CardList robots={ filterRobots } />
        </div>

      </div>
    )
  }
  
}

export default App;
