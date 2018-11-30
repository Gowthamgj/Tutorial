import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { FollwersComponent } from './follwers/follwers.component';
import { CommonService } from './common.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorComponent,
    FollwersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([{
      path: '',
      component:HomeComponent
    },{
      path:'follow',
      component:FollwersComponent
  },{
    path:'**',
    component:ErrorComponent
  }])
  ],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
