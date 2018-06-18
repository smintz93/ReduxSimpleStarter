import React from 'react';
import ReactDOM from 'react-dom';
// Create a new component 
// This component should produce some HTML 

const App = () => {
	//jsx
	// webpack babel translates jsx so browser can read it. 
	return <div>Hi</div>
}


// Take this component's HTML and put it on the page (in the dom)

// making an instance of a component
// rendering it to the div container in index.html 
ReactDOM.render(<App />, document.querySelector('.container'));