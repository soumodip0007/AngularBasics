import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  @ViewChild('myInput', {static: true}) myCustomInput: any;

  ngOnInit() {
    this.myCustomInput.nativeElement.focus()
  }

  sendInput(input: any, greet: any) {
    console.log(input.value);
    console.log(greet.innerText);
  }
}
