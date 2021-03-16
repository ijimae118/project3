import React from "react";
//import { Button, Input, Icon,Dropdown,Card} from 'semantic-ui-react'

class Music extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      play: false,
      pause: true,
    };

    this.url = "http://streaming.tdiradio.com:8000/house.mp3"; //"http://s3.tdiradio.com:8000/tdiradiobezreklama.mp3";
    this.audio = new Audio(this.url);
  }

  play() {
    this.setState({
      play: true,
      pause: false,
    });
    //console.log(this.audio);
    this.audio.play();
  }

  pause() {
    this.setState({ play: false, pause: true });
    this.audio.pause();
  }

  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.play();
          }}
          className="btn btn-danger"
        >
          <i class="fas fa-play"></i>
        </button>
        <button
          onClick={() => {
            this.pause();
          }}
          className="btn btn-dark"
        >
          <i class="fas fa-pause"></i>
        </button>
      </div>
    );
  }
}

export default Music;
// var au = new Audio("http://rootserver.rosseaux.net/demoscene/compos/exchipo/02/audio/ogg/27546_Rocco.ogg");

// //for (p in audioElement)
// au.controls = true;

// document.body.appendChild(au)
