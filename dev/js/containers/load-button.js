import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {fetchImageFromAPI} from '../actions/index'

class LoadButton extends Component {

    render() {
        console.log(this.props);
        return (
            <div className="load-button-wrapper">
                <button className="load-button" onClick={() =>  this.props.fetchImageFromAPI()}>Next Please</button>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        image: state.image
    };
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({fetchImageFromAPI: fetchImageFromAPI}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(LoadButton);