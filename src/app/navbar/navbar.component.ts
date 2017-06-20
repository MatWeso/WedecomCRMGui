import { Component } from '@angular/core';
import { AuthService } from "../shared/auth.service";

@Component({
  selector: 'navbar',
  templateUrl: 'navbar.component.html'
})
export class NavbarComponent{

  constructor(private authService : AuthService) { 
    
  }

  login(){
    this.authService.obtainAccessToken();
  }

  logout(){
    this.authService.logout();
  }

}
