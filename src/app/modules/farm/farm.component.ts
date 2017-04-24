import { Component, OnInit, ViewChild,ElementRef,AfterViewInit,OnDestroy } from '@angular/core';
import { DatePipe } from '@angular/common';

import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

@Component({
   selector: 'app-farm',
   templateUrl: './farm.component.html',
   styleUrls: ['./farm.component.scss'],
   providers: [DatePipe]

})
export class FarmComponent implements OnInit ,OnDestroy{

  private subscription: Subscription;

  constructor() { }



  ngOnInit() {



  }


  ngOnDestroy(){

     //this.subscription.unsubscribe();
 
  }

}
