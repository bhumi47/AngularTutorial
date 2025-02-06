import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-structural-dir',
  imports: [CommonModule, FormsModule],
  templateUrl: './structural-dir.component.html',
  styleUrl: './structural-dir.component.css'
})
export class StructuralDirComponent {
   
  div1BgColor: string = 'bg-primary';
  isDiv2Active: boolean = false;
  num1: string = '';
  num2: string = '';
  isActive :boolean = false;

  customerStyle: any = {
      'color':'white',
      'background-color': 'red',
      'width' : '200px',
      'height' : '200px',
      'border-radius' : '50%'
  };

  studentList : any[] = [
    
      {studeId: 15,totalMarks:23, gender: 'male', name: 'AAA', city: 'Pune', isActive: false},   	
      {studeId: 21,totalMarks:56, gender: 'female', name: 'BBB', city: 'Mumbai', isActive: false},
      {studeId: 32,totalMarks:34, gender: 'female', name: 'CCC', city: 'jalgaon', isActive: true},
      {studeId: 40,totalMarks:65, gender: 'male', name: 'DDD', city: 'Thane', isActive: false},
      {studeId: 50,totalMarks:21, gender: 'male', name: 'EEE', city: 'Nagpur', isActive: false},
      {studeId: 63,totalMarks:33, gender: 'female', name: 'FFF', city: 'Pune', isActive: true},
  
    ]

  addRedClass(){
        this.div1BgColor = "bg-danger";
  }
  addBlueClass(){
        this.div1BgColor = "bg-primary"
  }

  toggleDiv2class(){
       this.isDiv2Active = ! this.isDiv2Active;
  }

 
}