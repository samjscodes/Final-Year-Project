import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  appInfo() {
    alert('Welcome to GoalMinder! Please note that you can proceed without creating an account by simply clicking sign in!');
  }

}
