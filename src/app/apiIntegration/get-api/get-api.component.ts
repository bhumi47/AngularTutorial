import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-get-api',
  imports: [],
  templateUrl: './get-api.component.html',
  styleUrl: './get-api.component.css'
})
export class GetApiComponent {
   userList: any [] = [];  //variable we know array of object milega
   customerList: any [] = [];

  constructor(private http: HttpClient){
     this.getAllUser();
  }

  getAllUser(){
    debugger;
    this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((result: any)=>{
            debugger;
            this.userList = result;
    })
  }

  getAllCustomer(){
    debugger;
    this.http.get("https://projectapi.gerasim.in/api/RealEstate/GetAllCustomers222").subscribe((result: any)=>{
           debugger;
           this.customerList = result.data;

    },error=>{
         debugger;
    })
  }
}
