import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-for',
  imports: [FormsModule],
  templateUrl: './for.component.html',
  styleUrl: './for.component.css'
})
export class ForComponent {
  
  dayNumber : string='';
  
  cityArray : string [] = ['Pune', 'Mumbai', 'Nagpur', 'Thane'];

  studentList : any[] = [
    {studeId: 15,totalMarks:23, gender: 'male', name: 'AAA', city: 'Pune', isActive: false},   	
    {studeId: 21,totalMarks:56, gender: 'female', name: 'BBB', city: 'Mumbai', isActive: false},
    {studeId: 32,totalMarks:34, gender: 'female', name: 'CCC', city: 'jalgaon', isActive: true},
    {studeId: 40,totalMarks:65, gender: 'male', name: 'DDD', city: 'Thane', isActive: false},
    {studeId: 50,totalMarks:21, gender: 'male', name: 'EEE', city: 'Nagpur', isActive: false},
    {studeId: 63,totalMarks:33, gender: 'female', name: 'FFF', city: 'Pune', isActive: true},

  ]

  

}
