import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { OAuthService } from "angular-oauth2-oidc/dist";
import { Router } from "@angular/router";

@Injectable()
export class AuthService {
  constructor(private http: Http, private oAuthService: OAuthService, private router: Router) {
  }

  public obtainAccessToken() {
    console.log("initImplicitFlow");
    this.oAuthService.initImplicitFlow();
    console.log(this.getAccessToken());
  }

  public isLoggedIn(){
    if (this.getAccessToken() === null){
       console.log("Is logged is false");
       return false;
    }
    console.log("Is logged is true");
    return true;
  } 

  public logout() {
      this.oAuthService.logOut();
      location.reload();
  }  

  public getAccessToken() {
      this.oAuthService.getAccessToken();
  } 

  private handleError(error: any) {
    console.log(error);
    return Observable.throw(error.message || error);
  }

}
