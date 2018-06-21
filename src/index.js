import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar'
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail'

const API_KEY = 'AIzaSyBZLh5e7Av3cJVozAGKqXrsxp8W4UmA1hc'


class App extends Component  {
	constructor(props) {
		super(props);

		this.state = { videos: [] };

		YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
			console.log(videos, "<--- these are videos from the api call");
			this.setState({ videos });
			// can use to condense to just { vidoes: videos } bc name is the same
		});
	}
	render() {
	//jsx
	// webpack babel translates jsx so browser can read it. 
		return (
			<div>
				<SearchBar />
				<VideoDetail video={this.state.videos[0]} />
				<VideoList videos={this.state.videos} />
			</div>
		)		
	}	
}



// making an instance of a component
// rendering it to the div container in index.html 
ReactDOM.render(<App />, document.querySelector('.container'));