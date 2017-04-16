import React from 'react';

/*const VideoListItems = (props) => {
    const video = props.video;*/

// video = array dei risultati di ricerca dei video
// imageUrl e title sono proprietà/attributi ricavati dalla 
// chiamata all'API di YouTube
const VideoListItems = ({ video, onVideoSelect }) => {
    // per evitare di scrivere queste 2 costanti, vengono passate
    // direttamente nelle proprieta dell'arrowfunction.
    // se nelle proprietà della AF scrivessi (props) =>...
    // dovrei aggiungere le costanti riportate di seguito
    //const video = props.video
    //const onVideoSelect = props.onVideoSelect

    const imageUrl = video.snippet.thumbnails.default.url;
    const title = video.snippet.title;
    return (
        <li onClick={() => onVideoSelect(video)}
            className="list-group-item">
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object" src={imageUrl} />
                </div>

                <div className="media-body">
                    <div className="media-heading">{title}</div>
                </div>
            </div>
        </li>
    )
};

export default VideoListItems;