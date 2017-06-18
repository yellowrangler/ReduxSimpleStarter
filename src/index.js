import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

// google browser API key
const API_KEY = 'AIzaSyDLoojC0Yhmx-DMJ0f-XPayu7dykj8kbQ8';

// Create a new component. This component will create HTML
class App extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('surfboards');
  }

  videoSearch(term) {
    YTSearch( {key: API_KEY, term: term},(videos)  => {
      this.setState({ 
        videos,
        selectedVideo: videos[0]
       });
    });
  }

  render() {
    const videoSearch = _.debounce((term) => { this.videoSearch(term)}, 300);

    return (
      <div>
        <SearchBar onVideoSearchTermChange= {videoSearch} />
        <VideoDetail video={this.state.selectedVideo} /> 
        <VideoList 
          onVideoSelect= {selectedVideo => this.setState({selectedVideo}) }
          videos={this.state.videos} />
      </div>
    );
  };
}

// Takes this components generated HTML and put it on the page
// (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
