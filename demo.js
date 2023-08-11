// anotherModule.js or in an application that uses your library
import { thisAudio } from './index.mjs';  // if you're using .js as the extension

thisAudio.getRawAudioData('./mp3.mp3').then(data => {
    // Use the raw audio data...
});

/*
When you fetch the raw audio data from an audio file using getRawAudioData,
 you're essentially retrieving the audio samples that make up the audio track.
  For a typical audio file, you'll have a vast number of these samples, 
  depending on the sample rate and the duration of the audio.
*/

//This is a basic way to inspect the data.
thisAudio.getRawAudioData('./mp3.mp3').then(data => {
    console.log(data);
});