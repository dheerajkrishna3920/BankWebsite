import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {


  accno:any
  uname:any
  psw:any

  
    register(){
      console.log(this.accno,this.uname,this.psw);
      alert("register works")

    

    
  }
}
