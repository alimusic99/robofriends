import React from 'react';
import CardLists from './CardLists.js';
import {robots} from './robots.js';
import SearchBox from './SearchBox.js';
import './App.css';
import Scroll from './Scroll.js';
import ErrorBoundry from './ErrorBoundry.js';

class App extends React.Component {
	
	constructor(){
      super();
		this.state ={

			robots : [],
	        SearchField : ''
		}
	}

     

     componentDidMount(){
        
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => {
        	return response.json();
        }).then(users => {
            
            this.setState({robots : users})
        })
     }


 OnSearchChange = (event) => {
    this.setState({SearchField:event.target.value});
 	 
 	 }

	render(){

     const filteredRobots = this.state.robots.filter(robots =>{
        return robots.name.toLowerCase().includes(this.state.SearchField.toLowerCase());
    })

     if(this.state.robots.length === 0){

     	return <h1>Loading</h1>
     }else{

     	return(
		<div className= 'tc'>
		<h1 className= 'f1'>RoboFriends</h1>
		<SearchBox SearchChange ={this.OnSearchChange}/>
		<Scroll>
		<ErrorBoundry>
         <CardLists robots = {filteredRobots}/>
         </ErrorBoundry>
         </Scroll>
         </div>
		);
     }
		
	}

	
}

export default App;