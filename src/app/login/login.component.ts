import { Component, OnInit } from '@angular/core';
import { OAuthService } from "angular-oauth2-oidc/dist";
import { AuthService } from "app/shared/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  constructor(private oAuthService : OAuthService) { 
  }

  ngOnInit() {
  }

}
