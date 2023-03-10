import { Component, Input } from '@angular/core';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-comp',
  templateUrl: './comp.component.html',
  styleUrls: ['./comp.component.css']
})
export class CompComponent {
  constructor(private _loggerSvc:LoggerService){};
  // _loggerSvc.log('hello');
  @Input('num') no;
  data = this._loggerSvc.data;
  showNo(){
    this._loggerSvc.log(this.no);
  }
}
