// audio.js
class AudioPlayer {
    constructor() {
        this.audioElement = new Audio();
    }

    load(src) {
        this.audioElement.src = src;
        this.audioElement.load();
    }

    play() {
        this.audioElement.play();
    }

    pause() {
        this.audioElement.pause();
    }
}

// Example usage:
const player = new AudioPlayer();
player.load('path_to_your_audio_file.mp3');
player.play();  // Plays the loaded audio

// After some time or on some event, you can pause it
player.pause();