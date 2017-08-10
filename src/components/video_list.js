/**
 * Created by Akshat on 08-08-2017.
 */

import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = function (props) {

    const videoItems = props.videos.map((video)=>{
       return (

             <VideoListItem key={video.etag} onVideoSelect={props.onVideoSelect} video={video} />

       )
    });

    return (
            <ul className="col-md-4 list-group">
                {videoItems}
            </ul>
    )
};

export default VideoList;