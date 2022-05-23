import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import * as _ from 'lodash';
import { LogisticsDataService } from '../../services/logistics-data.service';

export class LogisticsData {
  partNumber: Number;
  partName: string;
}

@Component({
  selector: 'app-app-root',
  templateUrl: './app-root.component.html',
  styleUrls: ['./app-root.component.css'],
})
export class AppRootComponent implements OnInit {
  logisticsData: LogisticsData[];
  checkedItems: LogisticsData[] = [];

  @ViewChild('hellCheckBox') hellCheckBox: any;
  constructor(
    protected router: Router,
    protected logisticsService: LogisticsDataService
  ) {}

  ngOnInit() {
    this.logisticsData = this.logisticsService.getLogisticsData;
  }

  generateQR(): void {
    this.router.navigate(['qrGenerator'], {
      queryParams: this.checkedItems.map(x => x.partNumber),
    });
  }

  scanQR(): void {
    this.router.navigate(['scanQR']);
  }

  select(part: LogisticsData): void {
    if (this.checkedItems.some((c) => c.partNumber === part.partNumber)) {
      _.remove(this.checkedItems, part);
    } else {
      this.checkedItems.push(part);
    }
    this.checkHellBox();
  }

  selectAll(): void {
    if (!this.hellCheckBox.nativeElement.checked) {
      this.checkedItems = [];
    } else {
      this.checkedItems = _.cloneDeep(this.logisticsData);
    }
    this.checkHellBox();
  }

  checkHellBox(): void {
    this.hellCheckBox.nativeElement.checked =
      this.checkedItems.length === this.logisticsData.length;
    this.hellCheckBox.nativeElement.indeterminate =
      this.checkedItems.length &&
      this.checkedItems.length < this.logisticsData.length;
  }

  isPartSelected(part: LogisticsData): boolean {
    return this.checkedItems.some((c) => c.partNumber === part.partNumber);
  }
}
