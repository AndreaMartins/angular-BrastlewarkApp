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

  data: any;
  id: number;
  contact: any = {
    age: '',
    friends: '',
    hair_color: '',
    height: '',
    id: '',
    name: '',
    professions: '',
    thumbnail: '',
    weight: ''
  }

  constructor(private appService: AppService,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.getContacts();
  }

  getParams() {
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
      (data: any) => {
        this.data = data.Brastlewark;
        this.getParams();
      },
      (error) => console.log(error),
    );
  }

  getContact(index: number) {
    return this.data[index];
  }


}
