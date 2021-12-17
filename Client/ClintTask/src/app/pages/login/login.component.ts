import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {UserService} from './user.service';
import {Router} from "@angular/router"
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  userEmail;
  constructor(private userService : UserService,private router : Router ) { }

  ngOnInit() {
    if(JSON.parse(localStorage.getItem('userData'))){
      this.router.navigate(['/home'])
    }
  }
  onClickSubmit(data:NgForm){
    console.log(data.value);
    
    this.userService.user_Login(data.value).subscribe((res:any)=>{
      console.log(res.success);
      
      if(res.success == true){
        this.userEmail= res.data.email;
        localStorage.setItem("userData",JSON.stringify(res));
        this.router.navigate(['/home'])
      }
    },(e)=>{
      console.log(e);
      
    })
  }
}
