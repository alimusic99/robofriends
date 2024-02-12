import React from 'react';


class ErrorBoundry extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			haseError : false
		}
	}


componentDidCatch(error , info){

	this.setState({haseError : true});
}


	render(){
      if(this.state.haseError){

      	return <h1>ooops site hase been downnnnn!!!</h1>
      }
      return this.props.children
	}
}

export default ErrorBoundry;