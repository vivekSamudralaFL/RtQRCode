import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { QrCodeGeneratorComponent } from '../qr-code/qr-code-generator/qr-code-generator.component';
import { AppRootComponent } from '../app-root/app-root.component';
import { ScanQrComponent } from '../qr-code/scan-qr/scan-qr.component';

export const routes: Routes = [
  {
    path: '',
    component: AppRootComponent,
  },
  {
    path: 'qrGenerator',
    component: QrCodeGeneratorComponent,
  },
  {
    path: 'scanQR',
    component: ScanQrComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  declarations: [],
})
export class AppRoutingModule {}
