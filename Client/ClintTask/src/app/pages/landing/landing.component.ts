import { Component, OnChanges, OnInit } from '@angular/core';
import { AllusersService } from './allusers.service';
import {Router} from "@angular/router"

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html'
})
export class LandingComponent implements OnInit ,OnChanges{
 public allUsersArray;
  constructor(private alluser : AllusersService,private router : Router) { 
  
  }

  ngOnChanges(){
    this.alluser.allUsers().subscribe((res:any)=>{
      this.allUsersArray =  res.data;
     },(e)=>{
 
     })
  }
  ngOnInit() {
    this.alluser.allUsers().subscribe((res:any)=>{

      this.allUsersArray =  res.data;
     },(e)=>{
 
     })
  }
  deleteUser(id){
    console.log(id);
    this.alluser.deleteApi(id).subscribe((res:any)=>{
      if(res.success==true){
      window.location.reload()
      }
    },(e)=>{
      console.log(e);
      
    })
  }
  

}
