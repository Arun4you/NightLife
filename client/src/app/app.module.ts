import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule, JsonpModule, Jsonp, Response } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import {YelpapiService} from './services/yelpapi.service';
import {TwitterService} from './services/twitterapi.service'

const appRoutes = [
  { path: '', component: DashboardComponent },  
]

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(appRoutes), HttpModule, FormsModule, JsonpModule 
  ],
  providers: [YelpapiService, TwitterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
