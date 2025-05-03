import { Component } from '@angular/core';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrl: './to-do-list.component.css'
})
export class ToDoListComponent {
  parentMessage = 'Hello from Parent!';
  receivedMessage = '';

  receiveMessage(message: string) {
    this.receivedMessage = message;
  }

}
