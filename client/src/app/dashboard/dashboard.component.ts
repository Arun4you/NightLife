import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {YelpapiService} from './../services/yelpapi.service'
import {TwitterService} from './../services/twitterapi.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  clubName:any;
  imageUrl:any;
  location:string;
  clubs:string[];
  
  constructor(private apiservice:YelpapiService, private twitterapi:TwitterService) { }
 
 ngOnInit() {   }
 
   textSearch(){ 
    console.log(location); 
    var Query :string= this.location;
     this.apiservice.textSearch(Query).subscribe(callback =>{
      // console.log(callback.businesses.id);  
       //console.log(this.clubs)
       if(callback.businesses == undefined){
         // this.FlashMessages.show('please enter valid search location', { classes: ['alert','alert-danger'], timeout: 3000 });        
         console.log('please enter valid search location')
       }else{
         this.clubs = callback.businesses;
         console.log(JSON.stringify(this.clubs));        
       }
     })
   }
 
   twittercall(club:string){
     let clubdetails:string= club;
     console.log("component");
     this.twitterapi.twittercall().subscribe(
       data=>console.log(JSON.stringify(data)));
     };
   
 
 }