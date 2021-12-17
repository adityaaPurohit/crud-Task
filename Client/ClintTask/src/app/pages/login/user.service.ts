import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  public url ; 
  constructor(private http : HttpClient) {
    this.url =  environment.URL
   }

  user_Login(data){
   return this.http.post(this.url + 'login', data)
  }
}
