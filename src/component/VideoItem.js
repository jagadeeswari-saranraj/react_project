import React from'react';
import './VideoItem.css';


const VideoItem = ({video, onVideoSelect}) => {
    return (
        <div className="video">
            <div className="video-item item" onClick={() => onVideoSelect(video)}>
                <img className="ui image" src={video.snippet.thumbnails.medium.url} alt={video.snippet.channelTitle} />
                <div className="content" style={{'marginLeft': '10px'}}>
                    <div className="header"> <b> {video.snippet.title} </b></div>
                </div>
            </div>
        </div>
    );
};

export default VideoItem;