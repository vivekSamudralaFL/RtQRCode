import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { QRCodeModule } from 'angularx-qrcode';
import { QrCodeGeneratorComponent } from './qr-code/qr-code-generator/qr-code-generator.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { RouterModule } from '@angular/router';
import { AppRootComponent } from './app-root/app-root.component';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { ScanQrComponent } from './qr-code/scan-qr/scan-qr.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    QRCodeModule,
    AppRoutingModule,
    RouterModule,
    ZXingScannerModule,
  ],
  declarations: [
    AppComponent,
    QrCodeGeneratorComponent,
    AppRootComponent,
    ScanQrComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
