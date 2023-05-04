import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

sData="service data"

  constructor() { }

  checkData(){
    return "hello hi"
  }
}
