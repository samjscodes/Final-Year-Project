import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor() { }

  // Function to display app information
  appInfo() {
    alert('Welcome to GoalMinder! Please note that you can proceed without creating an account by simply clicking sign in!');
  }

  ngOnInit() {
  }

}
