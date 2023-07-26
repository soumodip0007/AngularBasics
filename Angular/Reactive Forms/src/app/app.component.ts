import { Component } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Reactive Forms';
  loginForm = new FormGroup({
    user:new FormControl(''),
    password:new FormControl('')
  })
  loginUser() {
    console.log(this.loginForm.value);
  }
}
