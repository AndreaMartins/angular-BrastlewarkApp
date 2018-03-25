import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { ListsComponent } from './lists/lists.component';
import { DetailComponent } from './detail/detail.component';
import { FilterPipe } from './lists/filter.pipe';
import { AppService} from './app.service';


const appRoutes: Routes = [
  {path: '', component: ListsComponent},
  {path: ':id', component: DetailComponent},
]



@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ListsComponent,
    DetailComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
