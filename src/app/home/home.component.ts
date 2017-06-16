import { Component } from '@angular/core';
import { OAuthService } from "angular-oauth2-oidc/dist";

@Component({
  selector: 'home',
  template: '<h1>Home</h1>'
})
export class HomeComponent {
  constructor (private oAuthService : OAuthService){
    
  }
}
