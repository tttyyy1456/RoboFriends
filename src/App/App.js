import React from 'react';
import CardList from '../Components/CardList';
// import {robots} from './robots';
import SearchBox from '../Components/SearchBox.js';
import {connect} from 'react-redux';
import './App.css';
import Scroll from '../Components/Scroll';
import ErrorBoundry from '../Components/ErrorBoundry';
import {SetSearchField} from '../Actions';


const mapStateToProps = (state) => {
	return {
		searchField: state.searchField
	}
}

const mapDispatchToProps = (dispatch) =>{
	return {
		onSearchChange: (event) => dispatch(SetSearchField(event.target.value))
	}
}

class App extends React.Component{

constructor(){
  super();
  	this.state ={
		robots: []
		}
		
	}

componentDidMount(){
	fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => this.setState({robots: users}))
}

render(){
	const {robots,} = this.state;
	const {searchField, onSearchChange} = this.props
	const filteredRobots = robots.filter(robo =>{
		return robo.name.toLowerCase().includes(searchField.toLowerCase())
	})
	if(robots.length ===0)
		return <h1 className='tc'>Loading</h1>
	else
	return(
		<div className='tc'>
			<h1 className='f1'>RoboFriends</h1>
			<SearchBox searchChange={onSearchChange}/>
			<Scroll>
				<ErrorBoundry>
			<CardList robots={filteredRobots}/>
				</ErrorBoundry>
			</Scroll>
		</div>
		 )
	}

}

export default connect(mapStateToProps, mapDispatchToProps)(App);