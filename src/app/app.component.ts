import { Component } from '@angular/core';

import { NavbarComponent } from './navbar/navbar.component';
import { OAuthService } from "angular-oauth2-oidc/dist";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private oauthService: OAuthService) {

    // Login-Url
    this.oauthService.loginUrl = "http://localhost:8080/oauth/authorize";

    // URL of the SPA to redirect the user to after login
    this.oauthService.redirectUri = window.location.origin + "/";

    // The SPA's id. Register SPA with this id at the auth-server
    this.oauthService.clientId = "CRMClient";

    // set the scope for the permissions the client should request
    this.oauthService.scope = "openid profile email READ";

    // set to true, to receive also an id_token via OpenId Connect (OIDC) in addition to the
    // OAuth2-based access_token
    this.oauthService.oidc = false;

    // Use setStorage to use sessionStorage or another implementation of the TS-type Storage
    // instead of localStorage
    this.oauthService.setStorage(sessionStorage);

    // To also enable single-sign-out set the url for your auth-server's logout-endpoint here
    //this.oauthService.logoutUrl = "http://localhost:4200/oauth/token";

    // This method just tries to parse the token(s) within the url when
    // the auth-server redirects the user back to the web-app
    // It dosn't send the user the the login page
    this.oauthService.tryLogin({});


  }
}
