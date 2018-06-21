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
				<div className="search-bar">
					<input 
			
					value={this.state.term}
					onChange={ event => this.onInputChange(event.target.value)} />
				</div>
			);
			
		}

		onInputChange = (term) => {
			this.setState({term});
			this.props.onSearchTermChange(term)
		}

	}

export default SearchBar;

