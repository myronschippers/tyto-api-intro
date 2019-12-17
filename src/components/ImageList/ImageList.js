import React, { Component } from 'react';
import { connect } from 'react-redux';

class ImageList extends Component {
    render() {
        const imageListElements = this.props.store.giphyReducer.map((item, index) {
            return (
                <li key={index}>
                    {item.name}
                </li>
            );
        });

        return (
            <div>
                <h2>Image Results</h2>

                <ul>
                    {imageListElements}
                </ul>
            </div>
        );
    }
}

const mapStoreToProps = (store) => {
    return {
        store
    }
};

export default connect(mapStoreToProps)(ImageList);
