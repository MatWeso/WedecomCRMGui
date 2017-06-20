import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { OAuthService } from "angular-oauth2-oidc/dist";
import { AuthService } from "../shared/auth.service";

@Injectable()
export class AuthGuard implements CanActivate {
  
  constructor (private authService : AuthService, private oAuthService : OAuthService, private router: Router){
    
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    //let loggedOut = this.oAuthService.getAccessToken() === null;
    console.log('Valid Id Token?'+ this.oAuthService.hasValidAccessToken());

    if(!this.oAuthService.hasValidAccessToken()){
      console.log('Logging in');
      this.oAuthService.initImplicitFlow();
    }
    return this.oAuthService.hasValidAccessToken();

  }
}
