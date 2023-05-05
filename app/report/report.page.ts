import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report',
  templateUrl: './report.page.html',
  styleUrls: ['./report.page.scss'],
})
export class ReportPage implements OnInit {
  submitted = false;

  constructor() {}

  ngOnInit() {}

  onSubmit() {
    this.submitted = true;
  }
}
