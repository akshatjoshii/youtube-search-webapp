/**
 * Created by Akshat on 08-08-2017.
 */
import React, {Component} from 'react';

class VideoListItem extends Component{
    constructor(props){
        super(props);

        this.video = this.props.video;

    }
    render(){

        return (
            <li className="list-group-item" onClick={this.selectVideo.bind(this)}>
                <div className="video-list media">
                    <div className="media-left">
                        <img src={this.video.snippet.thumbnails.default.url} alt="" className="media-object"/>
                    </div>
                    <div className="media-body">
                        <div className="media-heading">
                            { this.video.snippet.title }
                        </div>
                    </div>
                </div>

            </li>
        )
    }

    selectVideo(e){
        console.log( this.props.onVideoSelect);
        this.props.onVideoSelect(this.video);
    }

}

export default VideoListItem;