// audioUtility.js
class AudioUtility {
    constructor() {
        this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
    }
  // If you have an audio file that you'd like to process, you can fetch it and decode its data:
  async fetchAudioData(url) {
    const response = await fetch(url);
    const arrayBuffer = await response.arrayBuffer();
    const audioBuffer = await this.audioContext.decodeAudioData(arrayBuffer);
    return audioBuffer;
}
// Once you have the AudioBuffer, you can extract its raw data:
async getRawAudioData(url) {
    const audioBuffer = await this.fetchAudioData(url);
    const channelData = audioBuffer.getChannelData(0);  // For mono. Use 1 for right channel in a stereo file.
    return channelData;
}

    // ... more audio utility functions as methods of this class
}

export default AudioUtility;
//The channelData is a Float32Array containing the raw PCM data (ranging between -1 and 1) of the audio file.