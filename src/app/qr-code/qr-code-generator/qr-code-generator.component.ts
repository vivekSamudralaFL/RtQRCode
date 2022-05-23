import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-qr-code-generator',
  templateUrl: './qr-code-generator.component.html',
  styleUrls: ['./qr-code-generator.component.css'],
})
export class QrCodeGeneratorComponent implements OnInit {
  data = [];
  queryParams: any;
  qrData: string;
  constructor(protected route: ActivatedRoute) {}

  ngOnInit() {
    this.qrData = JSON.stringify(this.data);
    this.route.queryParams.subscribe((p) => {
      this.data = Object.values(p);
    });
    console.log(this.data);
  }
}
