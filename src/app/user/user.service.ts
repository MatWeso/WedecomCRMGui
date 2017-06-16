import { Injectable, OnInit, OnDestroy } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/Rx';
import { User } from './user';
import { NgRedux } from "ng2-redux/lib";
import { IAppState } from "app/store";
import { SERVICE_REQUEST, LOAD_USERS_SUCCESS, LOAD_USER_BY_ID, UPDATE_USER, UPDATE_USER_ERROR, CREATE_USER, SERVICE_REQUEST_ERROR, CHECK_USERNAME_SUCCESS } from "app/user/actions";
import { Subscription } from "rxjs/Subscription";
import { AuthService } from "app/shared/auth.service";
import { OAuthService } from "angular-oauth2-oidc/dist";

@Injectable()
export class UserService implements OnInit, OnDestroy{
  private userUrl = "http://localhost:8080/v1/users/";
  private headers : Headers;
  private loadUsersSubscription : Subscription; 
  private isDuplicateSubscription : Subscription;

  constructor(private http: Http, private ngRedux: NgRedux<IAppState>, private authService : AuthService, private oAuthService : OAuthService) {
    this.initHeaders();
    console.log("constructor");
  }
  
  ngOnInit(){
    this.loadUsers();
  }

  ngOnDestroy(){
    this.loadUsersSubscription.unsubscribe();
    this.isDuplicateSubscription.unsubscribe();
  }

  initHeaders(){
    this.headers = new Headers();
    this.headers.append("Content-Type", 'application/json');
    this.headers.append('Authorization', 'Bearer '+ this.oAuthService.getAccessToken());
    console.log("setting content type X");
  }

  checkUsername(username){
    let isDuplicateUser = true; 
    this.ngRedux.dispatch({type : SERVICE_REQUEST});
    return this.http
        .get(this.userUrl + "/username/" + username, { headers: this.headers })
        .toPromise();
  }

  loadUsers() {
    this.ngRedux.dispatch({type : SERVICE_REQUEST});
    var options = new RequestOptions({ headers: this.headers });
    console.log(options);
    this.loadUsersSubscription = this.http.get(this.userUrl, options)
        .map(res => {
          console.log("In map");
          console.log(res);
          let users = res.json();

          this.ngRedux.dispatch(
              {type : LOAD_USERS_SUCCESS, users : users});
        })
        .subscribe(
          users => {},
          err => {
             console.log("error" + err)
                         this.ngRedux.dispatch(
              {type : SERVICE_REQUEST_ERROR, error : err})
            }
          );
    
  }

  loadUser(id) {
    this.ngRedux.dispatch({type : LOAD_USER_BY_ID, id : id});
  }

  createUser(user) {
    if (!user) {
      this.handleError("Error in updateUser: No user object provided");
    }
    let body = JSON.stringify(user);
    return this.http
      .put(this.userUrl, body, { headers: this.headers})
      .map(res => {
        let user = res.json();
        this.ngRedux.dispatch({type : CREATE_USER, user : user})
      })
      .catch(this.handleError)
      .subscribe 
        (
          
        );
        //TODO Errorhandling
  }

  updateUser(user) {
    if (!user) {
      this.handleError("Error in updateUser: No user object provided");
    }
    let body = JSON.stringify(user);
    return this.http
      .post(this.userUrl, body, { headers: this.headers})
      .map(res => res.json())
      .catch(this.handleError).subscribe (u => this.ngRedux.dispatch({type : UPDATE_USER, user : user}), e => this.ngRedux.dispatch({type : UPDATE_USER_ERROR, user : user, error: e}));
  }

  deleteUser(user : User){
    user.active = "false";
    this.updateUser(user);
  }
  

  private handleError(error: any) {
    console.log("Handling error:" + error);
    return Observable.throw(error.message || error);
  }
}
