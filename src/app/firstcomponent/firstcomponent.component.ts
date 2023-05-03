import { Component,OnInit} from '@angular/core';

@Component({
  selector: 'app-firstcomponent',
  templateUrl: './firstcomponent.component.html',
  styleUrls: ['./firstcomponent.component.css']
})
export class FirstcomponentComponent implements OnInit {


  data="your perfect banking partner" 

  placeHolderData="Account no"   


  uname:any
  psw:any

  constructor() { }

  ngOnInit(): void {
  }

  login(a:any,b:any){
    this.uname=a.value
    this.psw=b.value
    console.log(this.uname,this.psw);
    
    alert("log in succesfull")
  }

  
}
