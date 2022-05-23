import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular';
  data = [{ partNumber: 1123213 }];
  qrdata = JSON.stringify(this.data);

  constructor(protected router: Router) {}

  
}
