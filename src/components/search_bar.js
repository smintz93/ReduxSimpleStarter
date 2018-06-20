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
					<input 
					// need this because the user needs to actually change the value of input
					// onChange doesn't do that
					value={this.state.term}
					onChange={ event => this.setState({term: event.target.value})} />
				</div>
			);
			
		}



	}

export default SearchBar;

