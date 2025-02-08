import { AsyncPipe, DatePipe, JsonPipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { interval, map, Observable } from 'rxjs';
import { NaPipe } from '../../pipes/na.pipe';

@Component({
  selector: 'app-pipe',
  imports: [NaPipe,AsyncPipe ,JsonPipe,DatePipe ,UpperCasePipe, LowerCasePipe, TitleCasePipe],
  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.css'
})
export class PipeComponent {

  firstName: string = "Angular";
  secName: string = "this is a demo session";
  currentDate: Date = new Date();
  currentTime : Observable<Date> = new Observable<Date>;

  student: any = {
    name: 'Bhumi',
    city: 'Pune',
    empId: 323,
    state: null   //undefined, 'MH',
  };

  constructor(){
      this.currentTime = interval(1000).pipe(map(() => new Date()));
    
  }


}
