import { Component, OnInit, OnDestroy, OnChanges, Input, SimpleChanges, DoCheck, AfterContentInit, ContentChild,  AfterViewInit, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnDestroy, OnChanges, DoCheck, AfterContentInit, AfterViewInit, AfterViewChecked {

   counter = 0;
   interval: any;
   @Input()
   greet = "";
   @ContentChild('projectedContent') projectedContent: any
   constructor() {
     console.log("Child Constructor is called");
   }
   ngOnInit(): void {
     console.log("Child OnInit is called");
     console.log('OnInit - ' + this.projectedContent);
     //  this.interval = setInterval(() => {
     //    this.counter = this.counter + 1;
     //    console.log(this.counter);
     //  }, 1000);
   }
   ngOnDestroy(): void {
    //clearInterval(this.interval)
     console.log("Child OnDestroy is called");
   }
   ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    console.log("Child OnChanges is called");
    console.log('OnChanges - ' + this.projectedContent);
   }
   ngDoCheck() {
    console.log("Child DoCheck is called");
    console.log('OnDoCheck - ' + this.projectedContent);
   }
   ngAfterContentInit() {
    console.log("In After Content Init");
    console.log("After Content Init - " + this.projectedContent);
   }
   ngAfterContentChecked() {
    console.log("In After Content Checked");
   }
   ngAfterViewInit(): void {
    console.log("In After View Init");
   }
   ngAfterViewChecked(): void {
    console.log("In After View Checked");
   }
}
