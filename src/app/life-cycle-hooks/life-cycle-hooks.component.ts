import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-life-cycle-hooks',
  templateUrl: './life-cycle-hooks.component.html',
  styleUrls: ['./life-cycle-hooks.component.css']
})
export class LifeCycleHooksComponent implements OnInit,OnDestroy {

  state = false;

  ngOnInit(){
    console.log('lch comp. initialized')
    // load data from database here ...
  }

  ngOnChanges(){
    console.log('this is called once at start if props are passed & everytime they change')
  }

  ngDoCheck(){
    console.log('change in state detected');
  }

  
  ngOnDestroy(){
    console.log('lch comp. is destroyed')
    
    // you can remove event listeners / setIntervals here to prevent memory leaks.
    // you can unsubscribe from observables 

  }
}
