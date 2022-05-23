import { Injectable } from '@angular/core';
import { LogisticsData } from '../app/app-root/app-root.component';

@Injectable({ providedIn: 'root' })
export class LogisticsDataService {
  _data = [
    {
      partNumber: 42007003,
      partName: 'Coolant Filter',
    },
    {
      partNumber: 44002028,
      partName: 'Fuel Filter',
    },
    {
      partNumber: 32001069,
      partName: 'BATTERY',
    },
    {
      partNumber: 42007203,
      partName: 'AIR LINE',
    },
    {
      partNumber: 53005072,
      partName: 'REFLEC.TAPE',
    },
    {
      partNumber: 53999004,
      partName: 'FREON R134A',
    },
    {
      partNumber: 2039014,
      partName: 'SEAL TARP',
    },
  ];
  constructor() {}

  get getLogisticsData(): LogisticsData[] {
    return this._data;
  }
}
