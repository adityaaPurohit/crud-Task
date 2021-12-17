import { Component } from '@angular/core';
import {Router} from "@angular/router"
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  email ;
  status = false; 
  constructor(private router: Router ){
    const email = JSON.parse( localStorage.getItem("userData"))
    if(email != null){
      this.status = true
      this.email =  email.email
    }
  }
  showMenu = false;
  toggleNavbar(){
    this.showMenu = !this.showMenu;
  }
  onProfile(){
    this.router.navigate(['/profile'])
  }
}
