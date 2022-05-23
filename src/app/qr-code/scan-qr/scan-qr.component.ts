import { Component, OnInit } from '@angular/core';
import BarcodeFormat from '@zxing/library/esm/core/BarcodeFormat';

@Component({
  selector: 'app-scan-qr',
  templateUrl: './scan-qr.component.html',
  styleUrls: ['./scan-qr.component.css'],
})
export class ScanQrComponent implements OnInit {
  qrResult: string;
  formatsEnabled: BarcodeFormat[] = [
    BarcodeFormat.CODE_128,
    BarcodeFormat.DATA_MATRIX,
    BarcodeFormat.EAN_13,
    BarcodeFormat.QR_CODE,
  ];
  constructor() {}

  ngOnInit() {}

  onCodeResult(result: any): void {
    this.qrResult = result.toString();
  }
}
