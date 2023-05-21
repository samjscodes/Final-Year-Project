import { Component } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private sharedService: SharedService) {}
    // Function to display app information
    appInfo() {
      alert('Welcome to GoalMinder! Please note that you can proceed without creating an account by simply clicking sign in!');
    }
 

  ionViewDidEnter() {
    this.sharedService.playAudio();
  }

  pauseAudio() {
    this.sharedService.pauseAudio();
  }
}
