import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../service/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {


  //accno:any
  //uname:any
  //psw:any




  pswCheck: any = false


  constructor(private fb: FormBuilder, private ds: DataService, private rout: Router) { }

  registerForm = this.fb.group({

    acno: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    uname: ['', [Validators.required, Validators.pattern('[a-zA-Z]+')]],
    psw: ['', [Validators.required, Validators.pattern('[0-9a-zA-Z]+')]],
    cpsw: ['', [Validators.required, Validators.pattern('[0-9a-zA-Z]+')]]


  })

  register() {
    // console.log(this.accno,this.uname,this.psw);

    //console.log(this.registerForm.value.acno);
    //console.log(this.registerForm.value.psw);

    if (this.registerForm.valid) {

      if (this.registerForm.value.psw == this.registerForm.value.cpsw) {

        this.ds.registerApi(
          this.registerForm.value.acno,
          this.registerForm.value.uname,
          this.registerForm.value.psw).subscribe((result: any) => {
            alert(result.message)
            this.rout.navigateByUrl("")
          },
            result => {
              alert(result.error.message)
              this.rout.navigateByUrl("")
            }
          )

      }
      else {
        //alert("Password deosnt match")
        this.pswCheck = true
      }
    }
    else {
      alert("invalid data")
    }






  }
}
