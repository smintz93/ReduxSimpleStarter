import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar'

const API_KEY = 'AIzaSyBZLh5e7Av3cJVozAGKqXrsxp8W4UmA1hc'
// Create a new component 
// This component should produce some HTML 

const App = () => {
	//jsx
	// webpack babel translates jsx so browser can read it. 
	return <div>
			<SearchBar />
		</div>
}


// Take this component's HTML and put it on the page (in the dom)

// making an instance of a component
// rendering it to the div container in index.html 
ReactDOM.render(<App />, document.querySelector('.container'));