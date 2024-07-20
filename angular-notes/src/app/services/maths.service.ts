import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { combineLatest, forkJoin, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MathsService {

  _msg="Service in angular";
  constructor(private http: HttpClient){}

  

  getmessage(){
    return this._msg;
  }

  getData() {
    const request1 = this.http.get('https:jsonplaceholder.typicode.com/posts/1');
    const request2 = this.http.get('https:jsonplaceholder.typicode.com/posts/2');
    const request3 = this.http.get('https:jsonplaceholder.typicode.com/posts/3');
    
    return forkJoin([request1, request2, request3]);
  }

  
}
