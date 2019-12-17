import React, { Component } from 'react';
import { connect } from 'react-redux';

class Search extends Component {
    state = {
        enteredSearch: '',
    }

    // Tracking what the user is typing into the search field
    changeSearch = (event) => {
        this.setState({
            enteredSearch: event.target.value,
        })
    }

    // updating global redux state with the search term entered by the user
    updateSearch = (event) => {
        this.props.dispatch({
            type: 'SEARCH_UPDATE_TERM',
            payload: this.state.enteredSearch
        })
    }

    render() {
        return (
            <div>
                <label>
                    Search:&nbsp;
                    <input
                        type="text"
                        placeholder="Search for..."
                        value={this.state.enteredSearch}
                        onChange={this.changeSearch}
                    />
                </label>
                <button onClick={this.updateSearch}>GO</button>
            </div>
        );
    }
}

export default connect()(Search);
