import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})


export class ProfileService {
  token = JSON.parse(localStorage.getItem('userData'))
  
  url;
  constructor(private http : HttpClient) {
    this.url = environment.URL
   }

  userProfile(email){
    var reqHeader = new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('userData')).data
   });
   return this.http.post(this.url+'userProfile',{email},{ headers: reqHeader })
  }

  userProfileImage(data){
    var reqHeader = new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('userData')).data
   });

   return this.http.post(this.url+'profilePic',data,{ headers: reqHeader })

  }
}
