import { getDefaultNormalizer } from '@testing-library/react';
import React from 'react';
import classes from './video.module.css';

class video extends React.Component{
    render(){
        return(
            <div className={classes.videoDiv}>
                <iframe className={classes.iframe} src={`https://player.vimeo.com/video/${this.props.vimeoId}`} width="100%" height="100%" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
            </div>
        )
    }
}

export default video;