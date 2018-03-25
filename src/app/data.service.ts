import { Injectable } from '@angular/core';
import {Http, Response } from '@angular/http';
import {AppService} from './app.service';
import 'rxjs/Rx';


@Injectable()
export class DataService  {

  data:any = this.appService.getData()

  constructor(private appService: AppService) {}

 }
