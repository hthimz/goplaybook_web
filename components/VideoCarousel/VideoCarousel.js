import React from 'react';
import YouTube from 'react-youtube';
 
export default class Example extends React.Component {
  render() {
    const opts = {
      height: this.props.active?'450':'170px',
      width: this.props.active?'700':'300px',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };
 
    return (
      // <div>text</div>
      <YouTube
        videoId={this.props.ID}
        opts={opts}
        onReady={this._onReady}
      />
    );
  }
 
  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}