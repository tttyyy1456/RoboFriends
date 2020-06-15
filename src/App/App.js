import React from 'react';
import CardList from '../Components/CardList';
// import {robots} from './robots';
import SearchBox from '../Components/SearchBox.js';
import './App.css';
import Scroll from '../Components/Scroll';



class App extends React.Component{

constructor(){
  super();
  	this.state ={
		robots: [],
		searchfield: ''
		}
		
	}

onSearchChange = (event) =>{
	this.setState({searchfield: event.target.value})
	
}

componentDidMount(){
	fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => this.setState({robots: users}))
}


render(){
	const {robots, searchfield} = this.state;
	const filteredRobots = robots.filter(robo =>{
		return robo.name.toLowerCase().includes(searchfield.toLowerCase())
	})
	if(robots.length ===0)
		return <h1 className='tc'>Loading</h1>
	else
	return(
		<div className='tc'>
			<h1 className='f1'>RoboFriends</h1>
			<SearchBox searchChange={this.onSearchChange}/>
			<Scroll>
			<CardList robots={filteredRobots}/>
			</Scroll>
		</div>
		 )
	}

}

export default App