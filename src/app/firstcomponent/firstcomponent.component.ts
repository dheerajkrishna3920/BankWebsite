import { Component,OnInit} from '@angular/core';

@Component({
  selector: 'app-firstcomponent',
  templateUrl: './firstcomponent.component.html',
  styleUrls: ['./firstcomponent.component.css']
})
export class FirstcomponentComponent implements OnInit {


  data="your perfect banking partner" 

  placeHolderData="Account no"   


  constructor() { }

  ngOnInit(): void {
  }

  login(){
    alert("log in succesfull")
  }

  unameChange(event:any){
    console.log(event.target.value);
    
  }
}
