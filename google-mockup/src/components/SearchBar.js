import React from 'react';

//Class Based Component (Bc/ we need State)
class SearchBar extends React.Component {
    state = {term: ''};

    onFormSubmit = (event) => {
        event.preventDefault(); /* prevents browser from trying to submit form automatically
                                    and in the process refresh the page */
        this.props.onSubmit(this.state.term) /* To get access to the callback 
        property that was passed from the app down to our search bar we would 
        reference this.props.onSubmit and call it with this.state.term */
    }
    
    /* We are using Controlled Element now */
    render() {
        return (
        //Custom CSS styling on divs and form with Semantic UI CDN
        <div className = "ui segment">
            <form 
            //onSubmit is event handler prop wired to onFormSubmit event handler
            onSubmit={this.onFormSubmit}
            className = "ui form">
                    <div className="field">
                        <label>Image Search</label>
                            <input type = "text"
                            value={this.state.term}
                            onChange = {(e) => this.setState({term: e.target.value})}
                            />
                    </div>
            </form>
        </div>
        )
    }
}

export default SearchBar;