import { Injectable } from '@angular/core';
import {Http, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class AppService  {

  private apiUrl ='https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json'

  constructor (private http:Http) {}

  getData(){
    return this.http.get(this.apiUrl)
    .map(
      (res: Response) => {
        const data = res.json();
        return data;
      }
    );
  }

}
