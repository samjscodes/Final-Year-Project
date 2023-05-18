import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  audioVolume: number;

  constructor(private sharedService: SharedService) {
    this.audioVolume = 0.3; // Set a default value for the audio volume
  }
  
  ngOnInit() {
    // Retrieve the audio volume from the shared service
    this.audioVolume = this.sharedService.getVolume();
  }

  onVolumeChange(event: any) {
    const volume = event.detail.value;
    // Update the audio volume in the shared service
    this.sharedService.setVolume(volume);
  }

  onPauseAudio() {
    // Pause the audio using the shared service
    this.sharedService.pauseAudio();
  }

  onPlayAudio() {
    // Play the audio using the shared service
    this.sharedService.playAudio();
  }
}
