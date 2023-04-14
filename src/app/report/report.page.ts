import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report',
  templateUrl: './report.page.html',
  styleUrls: ['./report.page.scss'],
})
export class ReportPage implements OnInit {

  constructor() {
    
   }
   onReportSubmit() {
    // show confirmation message
    alert('Thank you for your report!');
  
    // redirect to main page
    location.href = 'main-page';
  }
  
  ngOnInit() {
  }

}
