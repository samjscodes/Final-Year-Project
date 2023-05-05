import { Injectable } from '@angular/core';
import { Howl } from 'howler';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private audio: Howl;
  private volume: number = 0.3;

  constructor() {
    this.audio = new Howl({
      src: ['../../assets/Slime Paradise Genshin Impact Music OST.mp3'],
      loop: true,
      volume: this.volume,
    });
  }

  playAudio() {
    this.audio.play();
  }

  pauseAudio() {
    this.audio.pause();
  }

  setVolume(volume: number) {
    this.volume = volume;
    this.audio.volume(this.volume);
  }

  getVolume(): number {
    return this.volume;
  }
}