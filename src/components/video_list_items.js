import React from 'react';

/*const VideoListItems = (props) => {
    const video = props.video;*/

// video = array dei risultati di ricerca dei video
// imageUrl e title sono proprietà/attributi ricavati dalla 
// chiamata all'API di YouTube
const VideoListItems = ({ video }) => {
    //console.log(video)
    const imageUrl = video.snippet.thumbnails.default.url;
    const title = video.snippet.title;
    return (
        <li className="list-group-item">
            <div className="video-list-media">
                <div className="media-left">
                    <img className="media-object" src={imageUrl}/>
                </div>

                <div className="media-body">
                    <div className="media-heading">{title}</div>
                </div>
            </div>
        </li>
    )
};

export default VideoListItems;