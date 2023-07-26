
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-app';
  firstName = "Here the code begins";
  imagepath = "assets/IEMLogo.png";
  passValueToComponent(e: any) {
    console.log(e.target.value);
  }
  defaultVal = "Angular"
  changeValue(e: any) {
    console.log(e.target.value);
  }
}
