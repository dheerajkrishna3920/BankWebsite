import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';


@Component({
  selector: 'app-firstcomponent',
  templateUrl: './firstcomponent.component.html',
  styleUrls: ['./firstcomponent.component.css']
})
export class FirstcomponentComponent implements OnInit {


  

  placeHolderData = "Account no"







  constructor(private rout: Router, private fb: FormBuilder, private ds: DataService) { }

  loginForm = this.fb.group({

    acno: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    psw: ['', [Validators.required, Validators.pattern('[0-9a-zA-Z]+')]]
  })




  ngOnInit(): void {
  }

  login() {
    //console.log(this.uname, this.psw);

    if (this.loginForm.valid) {

      this.ds.loginApi(this.loginForm.value.acno,
        this.loginForm.value.psw).subscribe((result: any) => {

          //storing token
          localStorage.setItem('token',JSON.stringify(result.token))
          alert(result.message)
          this.rout.navigateByUrl('home')
          localStorage.setItem('currentAcno',result.currentAcno)
          localStorage.setItem('currentUser',result.currentUser)
        },
          result => {
            alert(result.error.message)
          }
        )

    }
    else {
      alert("invalid form")
    }



  }


}
