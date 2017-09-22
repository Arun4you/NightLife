import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class YelpapiService { 

    constructor(private http: Http) { }

    query : string;
    textSearch(query: string) {        
        var Query = query; 
        var headers = new Headers();
        //headers.append('Authorization', 'Bearer _oEVu39g91rQTbXCpLPztKYlHs-7-uXWWDxBVFEzJGggzgH5orCLcvMRE30glOugJ08ETFAE0SkP2KftK-Aauwtp4C8YZU74VXBVt2Sj9b8wMrHFNZqm3UCCcaFeWXYx')
        headers.append('Content-Type','application/json');
        console.log(query);
        return this.http.get('/textSearch/'+ Query,{headers:headers})
        .map(res=>res.json())
    }

}

