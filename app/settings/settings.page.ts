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
    this.audioVolume = 0.3; // or any default value you want to set
  }
  

  ngOnInit() {
    this.audioVolume = this.sharedService.getVolume();
  }

  onVolumeChange(event: any) {
    const volume = event.detail.value;
    this.sharedService.setVolume(volume);
  }

  onPauseAudio() {
    this.sharedService.pauseAudio();
  }

  onPlayAudio() {
    this.sharedService.playAudio();
  }
}
