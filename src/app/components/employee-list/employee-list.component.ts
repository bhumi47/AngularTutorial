import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [RouterLink],
  // template: '<h1 class ="text-primary">Hello from admin</h1>',
  // styles: ['.primary{color:red}']
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent {

  constructor(private router :Router){ 
 
  }

  //this is dependency injection

  navigateToAttribute(){
    this.router.navigateByUrl("structural-dir")
}

}
