import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {
  clickable = false;
  count = 0;
  name = "";

  inc(){
    this.count++;
  }

  toggle(){
    this.clickable=!this.clickable;
  }

  changeNameToS(){
    this.name = "S"
  }
}
