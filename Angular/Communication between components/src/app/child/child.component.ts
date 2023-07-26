import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input()
  greet = 'Hello';
  @Output()
  sendMessageEmitter = new EventEmitter();
  sendMessageToParent(e: any) {
    this.sendMessageEmitter.emit(e.target.value);
  }

}
