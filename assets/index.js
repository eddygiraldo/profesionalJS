import MediaPlayer from './MediaPlayer.js';
import AutoPlay from './plugins/AutoPlay.js';

const video = document.querySelector('video');
const player = new MediaPlayer({
  el: video, plugins: [
    //new AutoPlay()
  ]
});

const buttonPlay = document.getElementById('PlayButton');
const buttonMute = document.getElementById('MuteButton');
buttonPlay.onclick = () => player.togglePlay();
buttonMute.onclick = () => player.toggleMute();