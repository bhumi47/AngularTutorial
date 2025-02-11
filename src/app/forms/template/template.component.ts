import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template',
  imports: [FormsModule, JsonPipe],
  templateUrl: './template.component.html',
  styleUrl: './template.component.css'
})
export class TemplateComponent {
    studentObj: any = {
      firstName: '',
      lastName: '',
      userName: '',
      city: '',
      state: '',
      zipCode: '',
      isacceptTerms:false
    }


    formValue: any = {};
    
    onSubmit(){
      // debugger;
         this.formValue = this.studentObj;
    }
    resetform(){
      this.studentObj = {
        firstName: '',
        lastName: '',
        userName: '',
        city: '',
        state: '',
        zipCode: '',
        isacceptTerms:false
      }
    }

}
