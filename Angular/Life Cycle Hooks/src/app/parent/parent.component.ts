import { Component, DoCheck, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit,OnChanges,DoCheck{

  isChild = true;
  greet = "";
  constructor() {
    console.log("Parent Constructor is called");
  }
  ngOnInit(): void {
    console.log("Parent OnInit is called");
  }
  toggleChild() {
    this.isChild = !this.isChild;
  }
  ngOnChanges() {
    console.log("Parent OnChanges is called")
  }
  ngDoCheck() {
    console.log("Parent DoCheck is called")
  }
}
