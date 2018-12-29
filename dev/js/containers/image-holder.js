import React, {Component} from 'react';
import {connect} from 'react-redux';
import Loader from 'react-loader-advanced';
import LazyLoad from 'react-lazy-load';
import { LazyLoadImage } from 'react-lazy-load-image-component';

class ImageHolder extends Component {

    render() {
        return (
            <div className="load-image-wrapper">
                {/* <LazyLoadImage height="500" width="500" src={this.props.image.file} > */}
                        <img className="load-image" src={this.props.image.file} height="500" width="500"/>
                {/* </LazyLoadImage> */}
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        image: state.image
    };
}

export default connect(mapStateToProps)(ImageHolder);
