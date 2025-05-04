import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrl: './person-form.component.css'
})
export class PersonFormComponent {

  userForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
  });

  submitForm() {
    console.log(this.userForm.value);
  }


}
