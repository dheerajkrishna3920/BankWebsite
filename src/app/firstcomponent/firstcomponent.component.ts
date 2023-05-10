import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-firstcomponent',
  templateUrl: './firstcomponent.component.html',
  styleUrls: ['./firstcomponent.component.css']
})
export class FirstcomponentComponent implements OnInit {


  data = "your perfect banking partner"

  placeHolderData = "Account no"


  uname: any
  psw: any

  constructor(private rout:Router) { }

  ngOnInit(): void {
  }

  login() {
    console.log(this.uname, this.psw);

  this.rout.navigateByUrl('home')
  }


}
