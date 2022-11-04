import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import NewCard from './components/NewRobot/NewRobot'
import CardList from './components/CardList'
import { robots }  from './components/robots'
import 'tachyons';



function App() {
  return (
    <div className='App'>
     <NavBar />
     <NewCard />
     <CardList robots={ robots } />
    </div>
  )
}

export default App;
