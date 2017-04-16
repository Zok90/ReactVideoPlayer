import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyBPFzZJHtL1amzbD1n5FJwWdKlZqL6BXio';

class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            videos: [],
            selectedVideo: null
        };

        this.videoSearch('Good life radio');

        /*    YTSearch({key: API_KEY, term: 'surfboards'}, (data) => {
                this.setState({ videos: data });
            });*/
        /*
        YTSearch({ key: API_KEY, term: 'Dave coleman' }, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
            //se il nome della proprietà passata alla funzione è uguale al nome del mio "state"
            //posso scrivere direttamente il nome della proprietà (variabile)
            // prima di aggiungere lo stato di "selectedVideos" c'era = this.setState({ videos })
        }); */
    }

    videoSearch(term) {
        YTSearch({ key: API_KEY, term: term, maxR: 10 }, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
        });
    }

    render() {
        const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300)

        return (
            <div>
                <SearchBar onSearchTermChange={videoSearch} />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList
                    onVideoSelect={(selectedVideo) => this.setState({ selectedVideo })}
                    videos={this.state.videos} />

            </div>
        );
    }
}
ReactDOM.render(<App />, document.querySelector('.container'));
