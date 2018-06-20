import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar'

const API_KEY = 'AIzaSyBZLh5e7Av3cJVozAGKqXrsxp8W4UmA1hc'



class App extends Component  {
	constructor(props) {
		super(props)

		this.state = { videos: [] };

		YTSearch({key: API_KEY, term: 'surfboards'}, (data) => {
			console.log(data, "<--- this is the data from the api call");
			this.setState({ videos: data })
		});
	}
	render() {
	//jsx
	// webpack babel translates jsx so browser can read it. 
	return <div>
			<SearchBar />
		</div>
	}	
}



// making an instance of a component
// rendering it to the div container in index.html 
ReactDOM.render(<App />, document.querySelector('.container'));