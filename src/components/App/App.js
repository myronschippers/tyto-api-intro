import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import ImageList from '../ImageList/ImageList';
import { connect } from 'react-redux';

const apiKey = 'b2daLLIO6SDnI0ZBkGICGf4EPaEsGLcf';
const baseGiphyUrl = 'api.giphy.com/v1/gifs/search';
const apiParam = 'api_key';
const searchParam = 'q';
const maxResultsParam = 'limit';

const fullApiUrl = `https://${baseGiphyUrl}?${apiParam}=${apiKey}&${maxResultsParam}=10`;
console.log(fullApiUrl);

class App extends Component {

    componentDidMount() {
        this.getRickAndMorty();
    }

    getRickAndMorty = (event) => {
        const searchTerm = 'Rick and Morty';
        // const fullApiUrl = `https://${baseGiphyUrl}/?${apiParam}=${apiKey}&${maxResultsParam}=10&${searchParam}=${searchTerm}`;

        axios({
            method: 'GET',
            url: `${fullApiUrl}&${searchParam}=${searchTerm}`
        })
        .then((response) => {
            console.log(response.data);
            this.props.dispatch({
                type: 'SET_GIPHY',
                payload: response.data.data,
            });
        })
        .catch((err) => {
            console.error('Error:', err);
        });

    }

    render() {
        return (
            <div>
                <header class="appBar">
                    <h1>Third Party APIs</h1>
                </header>

                <ImageList />
            </div>
        );
    }
}

export default connect()(App);
