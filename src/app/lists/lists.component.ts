import { Component, Input, OnInit, Output } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css'],
  providers: [AppService]
})

export class ListsComponent implements OnInit {

  data: any = [];
  filteredName = '';
  itemName: any;

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.getContacts();
  }

  getContacts() {
    this.appService.getData().subscribe(
      (data: any) => {
        this.data = data.Brastlewark;
      },
      (error) => console.log(error),
    );
  }

}
