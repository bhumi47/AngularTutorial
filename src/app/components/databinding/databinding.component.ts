import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-databinding',
  imports: [FormsModule],
  templateUrl: './databinding.component.html',
  styleUrl: './databinding.component.css'
})
export class DatabindingComponent {

  //string , number, boolean, date

  courseName: string = "Angular 22";
  stateName: string = "Maharashtra";
  inputType = "radio";
  myClassName: string = "bg-primary";
  rollNo: number = 123;
  isIndia: boolean = true;
  currentDate: Date = new Date();
  
  firstName = signal("bhumi raut");
  constructor(){
   
  }
  changeCourseName(){
     this.courseName = "React Js";
     this.firstName.set("Kartik Varade");
  }
  showAlert(message: string){
     alert(message)
  }
}
