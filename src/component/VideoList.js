import React from 'react';
import VideoItem from './VideoItem';
 

const VideoList = ({videos, onVideoSelect}) => {
    const renderedList = videos.map(video => {
        return <VideoItem  key={video.etag} video = {video}  onVideoSelect = {onVideoSelect}/>
    });
    return (
        <div className="ui list">
                {renderedList}
        </div>
    );
}


export default VideoList;