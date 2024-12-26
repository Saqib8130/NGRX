import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { from, interval, map, Subscriber, Subscription, toArray, UnsubscriptionError } from 'rxjs';
import { AllCapitalDirective } from './all-capital.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AllCapitalDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit {
  
  title = 'app';
  msg:any;
  // sub:Subscription;
  name:any;

constructor(){};

ngOnInit(){
  // Map Start here
  const broadcast=interval(1000);
  const sub=broadcast.pipe(
  map(data=>'video ' + data)
)
.subscribe(res=>{
    console.log(res)
    this.msg=res;
})
setTimeout(()=>{
  sub.unsubscribe();
}, 10000)
const obj=from([
  {id:1, name:'a'},
  {id:2, name:'b'},
  {id:3, name:'c'},
  {id:4, name:'d'},
  {id:5, name:'e'},
])
obj.pipe(
  map(data1=>data1.id),
  toArray()
).subscribe(res=>{
  console.log(res)
  this.name=res;
})

// Map End here



}

}

