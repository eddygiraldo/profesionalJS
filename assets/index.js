import MediaPlayer from './MediaPlayer.js';
import AutoPlay from './plugins/AutoPlay.js';
import AutoPause from './plugins/AutoPause.js';

const video = document.querySelector('video');
const player = new MediaPlayer({
  el: video, plugins: [
    new AutoPlay(),
    new AutoPause()
  ]
});

const buttonPlay = document.getElementById('PlayButton');
const buttonMute = document.getElementById('MuteButton');
buttonPlay.onclick = () => player.togglePlay();
buttonMute.onclick = () => player.toggleMute();

if('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js').catch(error => {
    console.log(error.message);
  })
}