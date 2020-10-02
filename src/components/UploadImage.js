import React from 'react';

import Predictions from './Predictions';

class UploadImage extends React.Component {


    render() {
        return (
          <div className="container">
            <div> Upload Image </div>
            <Predictions></Predictions>
          </div>
        );
    }
}

export default UploadImage;
