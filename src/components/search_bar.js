// functional (dumb) component or class based on component 
import React, { Component } from 'react';

	class SearchBar extends Component {
		// first and only function called auto when a new instance of class is created 
		constructor(props) {
			super(props);
			// only inside constructor function can you manuliplate like this with = 
			this.state = { term: '' }
		}
		render() {
			return (
				<div>
					<input onChange={ event => this.setState({term: event.target.value})} />
					Value of the input: {this.state.term}
				</div>
			);
			
		}



	}

export default SearchBar;

