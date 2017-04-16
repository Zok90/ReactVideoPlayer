import React from 'react';
import VideoListItem from './video_list_items';

const VideoList = (props) => {
    const videoItems = props.videos.map((video) => {
        //creo un altro array, partendo dall'array iniziale "video", 
        //che contiene il risulato degli elementi ricercati, quindi una lista di video
        // che vanno a finire nello stateless component "video_list_items.js"
        // formattati in tag <li> + bootstrap per i box
        return (
            <VideoListItem
                onVideoSelect={props.onVideoSelect}
                key={video.etag}
                video={video} />
        )
        // key è la chiave univoca di ogni video e viene passata 
        // per far sapere a Youtube quale video aggiornare,
        // nel caso in cui debba fare un refresh delle informazioni
        // di un video specifico. La key rende più veloce l'update delle info.
    });

    return (
        <ul className="col-md-4 list-group">
            {videoItems}
        </ul>
    );
}

export default VideoList;