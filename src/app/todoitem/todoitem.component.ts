import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-todoitem',
  templateUrl: './todoitem.component.html',
  styleUrl: './todoitem.component.css'
})
export class TodoitemComponent {
  @Input() childMessage!: string;
  @Output() messageEvent = new EventEmitter<string>();

  userInput: string = ''; // Store user input

  sendMessage() {
    this.messageEvent.emit(this.userInput);
  }

}
