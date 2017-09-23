import {Injectable} from '@angular/core';
import {Http, Headers, Jsonp} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TwitterService {  
    constructor(private jsonp: Http) { }
    
        query : string;
        // twittercall(){ 
        //    var headers = new Headers();    
        //    headers.append('ContentType','application/json');           
        // //    headers.append('ContentType','application/javascript');           
        //    console.log("service");
        //    return this.jsonp.get('http://local.dev.com:3003/auth/twitter?callback=JSONP_CALLBACK',{headers:headers})
        //    .map(res=>res.json())
        // } 

        twittercall(){ 
            var headers = new Headers();
            headers.append('Access-Control-Allow-Origin', "*");
            headers.append("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
            headers.append("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            headers.append('Content-Type','accept');     
            console.log("service");
            return this.jsonp.get('/auth/twitter',{headers:headers})
            .map(res=>res.json())
         } 

}