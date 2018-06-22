import _ from 'lodash';
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

		this.state = { 
			videos: [],
			selectedVideo: null
		};

		this.videoSearch('surfboards')
	}

	videoSearch = (term) => {
		YTSearch({key: API_KEY, term: term}, (videos) => {
			console.log(videos, "<--- these are videos from the api call");
			this.setState({ 
				videos: videos,
				selectedVideo: videos[0]
			});
			// can use to condense to just { vidoes: videos } bc name is the same
		});
		
	}
	render() {
	//jsx
	// webpack babel translates jsx so browser can read it. 
		// debounce takes inner function and it returns new function that only gets run once every 300 milliseconds.
		const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);

		return (
			<div>
				<SearchBar onSearchTermChange={videoSearch} />
				<VideoDetail video={this.state.selectedVideo} />
				<VideoList
					onVideoSelect={selectedVideo => this.setState({selectedVideo})}
					videos={this.state.videos} />
			</div>
		)		
	}	
}



// making an instance of a component
// rendering it to the div container in index.html 
ReactDOM.render(<App />, document.querySelector('.container'));