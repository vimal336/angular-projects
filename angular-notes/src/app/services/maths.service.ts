import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MathsService {

  _msg="Service in angular";
  constructor() {}

  

  getmessage(){
    return this._msg;
  }

  
}
