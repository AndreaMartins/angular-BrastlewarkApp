import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  providers: [AppService]
})
export class DetailComponent implements OnInit {
  data: any
  id: number;
  contact: any = {id:'', name:''}

  constructor(  private appService: AppService,
                private route: ActivatedRoute) {
  }

  ngOnInit() {

    this.getContacts();

  }

  getParams(){
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.contact = this.getContact(this.id);
          console.log(this.contact);
        }
      );
  }

  getContacts() {
    this.appService.getData().subscribe(
        (data: any ) => {
          this.data = data.Brastlewark;
          this.getParams();
        },
        (error) =>console.log(error),
      );

  }

  getContact(index:number) {
    console.log(this.data);
    return this.data[index];
  }


}
