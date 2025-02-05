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
   
  isDiv1Visible: boolean = true;
  isDiv2Visible: boolean = false;

  num1: string = '';
  num2: string= '';

  isActive: boolean = true;
  selectedState: string ='';

  cityArray : string [] = ['Pune', 'Mumbai', 'Nagpur', 'Thane'];
  studentList : any[] = [
    {studeId: 15, name: 'AAA', city: 'Pune', isActive: false},
    {studeId: 21, name: 'BBB', city: 'Mumbai', isActive: false},
    {studeId: 32, name: 'CCC', city: 'jalgaon', isActive: true},
    {studeId: 40, name: 'DDD', city: 'Thane', isActive: false},
    {studeId: 50, name: 'EEE', city: 'Nagpur', isActive: false},
    {studeId: 63, name: 'FFF', city: 'Pune', isActive: true},
  ]

  showDiv1(){
    this.isDiv1Visible = true;
  }
  hideDiv1(){
    this.isDiv1Visible = false;
  }
  toggleDiv2(){
    // this.isDiv2Visible = !this.isDiv2Visible;

    if(this.isDiv2Visible == true){
      this.isDiv2Visible =false;
    }else{
      this.isDiv2Visible = true;
    }
  }

}
