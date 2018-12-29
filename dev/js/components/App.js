import React from 'react';
import ImageHolder from '../containers/image-holder';
import LoadButton from '../containers/load-button';
require('../../scss/style.scss');

const App = () => (
    <div>
        <LoadButton />
        <hr />
        <ImageHolder />
    </div>
);

export default App;
