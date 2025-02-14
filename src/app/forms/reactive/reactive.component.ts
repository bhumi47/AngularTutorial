import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './reactive.component.html',
  styleUrl: './reactive.component.css'
})

//in template form we created object with certain number of properties but in 
// Reactive we have to create form in .ts

export class ReactiveComponent {
  studentForm: FormGroup = new FormGroup({
     firstName: new FormControl("", [Validators.required, Validators.minLength(4)]),
     lastName: new FormControl(),
     userName : new FormControl("some@123", [Validators.email]),
     city: new FormControl(),
     state: new FormControl(),
     zipCode : new FormControl(),
     isAcceptTerms : new FormControl()
  });

  formValue: any;

  onSave(){
    this.formValue = this.studentForm.value;
  }
}
