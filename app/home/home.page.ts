import { Component } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private sharedService: SharedService) {}

  ionViewDidEnter() {
    this.sharedService.playAudio();
  }

  pauseAudio() {
    this.sharedService.pauseAudio();
  }
}
