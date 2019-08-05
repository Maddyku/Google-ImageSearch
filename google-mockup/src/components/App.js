import React from 'react';
import unsplash from '../api/unsplash'; 
import SearchBar from './SearchBar';
import ImageList from './ImageList';

//Class Based Component
class App extends React.Component {
    //Initiate state object as images property with empty array []
    state = { images: [] }; 
    /* Define Event Handler 'onSearchSubmit' on the Parent App Component with
     'async' keyword to mark method as asynchronous */
    onSearchSubmit = async (term) => {
/* Use Axios library from unsplash.js file to make AJAX (GET) Network Request 
to Unsplash API. Mark GET Request with 'await' keyword and assign it to variable
'response'. Unsplash file has base URL so we just put /search/photos. */
        const response = await unsplash.get('/search/photos', {
            params: { query: term }, //Queries results of search term in unsplash Database
        })
        //Update images property with setState() and response from Unsplash API
        this.setState({images: response.data.results});

        //Console.log response from Unsplash API
        console.log(response.data.results);
    }

    render() {
        return (
            <div className = "ui container" style={{marginTop: '10px'}}>
                <SearchBar onSubmit = {this.onSearchSubmit} />
                <ImageList images = {this.state.images} />
            </div>
        )
    }
}

export default App;