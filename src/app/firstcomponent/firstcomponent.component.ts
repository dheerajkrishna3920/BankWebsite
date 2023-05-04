import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

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

  constructor(private ds:DataService) { }

  ngOnInit(): void {
  }

  login() {
    console.log(this.uname, this.psw);

    //alert(this.ds.checkData())
    alert(this.ds.sData)
  }


}
