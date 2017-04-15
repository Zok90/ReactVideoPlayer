import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyBPFzZJHtL1amzbD1n5FJwWdKlZqL6BXio';




class App extends Component {
constructor (props) {
    super(props)
    
    this.state = { videos: []};

/*    YTSearch({key: API_KEY, term: 'surfboards'}, (data) => {
        this.setState({ videos: data });
    });*/
     YTSearch({key: API_KEY, term: 'The Good Life Radio'}, (videos) => {
        this.setState({ videos }); 
        //se il nome della proprietà passata alla funzione è uguale al nome del mio "state"
        //posso scrivere direttamente il nome della proprietà (variabile)
    });
}
    render() {
        return (
            <div>
                <SearchBar />
                <VideoDetail video={this.state.videos[3]}/>
                <VideoList videos={this.state.videos}/> 
            </div>
        );    
    }
}
ReactDOM.render(<App />, document.querySelector('.container'));
