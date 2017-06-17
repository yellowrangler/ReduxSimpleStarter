import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

// google browser API key
const API_KEY = 'AIzaSyDLoojC0Yhmx-DMJ0f-XPayu7dykj8kbQ8';

// Create a new component. This component will create HTML
class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] };

    YTSearch( {key: API_KEY, term: 'surfboards'},(videos)  => {
      this.setState({ videos });
      // this.setState({ videos: videos }); if both key and property are the same
    });
  }
  render() {
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos}/>
      </div>
    );
  }

}

// Takes this components generated HTML and put it on the page
// (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
