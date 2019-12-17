import React, { Component } from 'react';
import { connect } from 'react-redux';

class ImageList extends Component {
    const imageListElements = this.props.store.
    render() {
        return (
            <div>
                <h2>Image Results</h2>

                {imageListElements}
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
