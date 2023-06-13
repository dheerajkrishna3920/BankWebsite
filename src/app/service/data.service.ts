import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';




//global header for overload
const options = {
  headers: new HttpHeaders()
}


@Injectable({
  providedIn: 'root'
})
export class DataService {



  constructor(private http: HttpClient) { }


  //token header method

  getToken() {

    //header create
    const headers = new HttpHeaders()

    //check token in local storage

    const token = JSON.parse(localStorage.getItem("token") || "")

    if (token) {
      options.headers = headers.append('acess_token', token)

    }
    return options


  }



  //regitser api-post

  registerApi(acno: any, uname: any, psw: any) {

    const body = {
      acno: acno,
      uname: uname,
      psw: psw

    }

    return this.http.post('http://localhost:3000/register', body)

  }





  //loginapi-post

  loginApi(acno: any, psw: any) {
    const body = {
      acno: acno,
      psw: psw
    }
    return this.http.post('http://localhost:3000/login', body)
  }



  //balanceapi-post

  balanceApi(acno: any) {
    return this.http.get('http://localhost:3000/balance/' + acno, this.getToken())
  }

  //get single user data

  getUserApi(acno: any) {
    return this.http.get('http://localhost:3000/getUser/' + acno, this.getToken())
  }


  //api fund transfer

  fundTransferApi(toAcno: any, fromAcno: any, amount: any, psw: any, date: any) {

    const body = {
      toAcno: toAcno,
      fromAcno: fromAcno,
      amount: amount,
      psw: psw,
      date: date

    }

    return this.http.post('http://localhost:3000/transfer', body, this.getToken())
  }


  //transaction history

  transactionHistory(acno: any) {
    return this.http.get('http://localhost:3000/transaction/' + acno, this.getToken())
  }



  //delete account- no body data for delete method

  deleteAccount(acno: any) {
    return this.http.delete('http://localhost:3000/deleteAc/' + acno, this.getToken())
  }




}










