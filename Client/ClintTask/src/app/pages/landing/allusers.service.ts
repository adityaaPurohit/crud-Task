import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AllusersService {
public url ;
token = JSON.parse(localStorage.getItem('userData'))

  constructor(private http : HttpClient) {
    this.url = environment.URL;
   }

  allUsers(){
    var reqHeader = new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('userData')).data
   });
    return this.http.get(this.url+'allUsers',{headers:reqHeader})
  }
  
  deleteApi(id){
    console.log("this.token.data",this.token.data);
    console.log("id",id);
    var reqHeader = new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('userData')).data
   });
  
    
    return this.http.post(this.url+'deleteuser',{id},{ headers: reqHeader })
  }
}
