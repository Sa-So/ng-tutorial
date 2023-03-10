import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor() { }

  public data = ['data1','data2'];

  log(msg: any)   { console.error(msg); }
}
