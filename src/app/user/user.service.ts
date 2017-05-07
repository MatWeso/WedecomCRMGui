import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { User } from './user';
import { NgRedux } from "ng2-redux/lib";
import { IAppState } from "app/store";

@Injectable()
export class UserService {
  private userUrl = "http://localhost:4444/api/users";
  private headers : Headers;

  constructor(private http: Http, private ngRedux: NgRedux<IAppState>) {
    this.initHeaders();
  }
  
  initHeaders(){
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
  }

  getUsers() {
    return this.http
      .get(this.userUrl)
      .map(response => response.json())
      .catch(this.handleError);;
  }

  loadUsers() {

  }

  getUser(id) {
    var url = this.userUrl + '/id/' + id;
    console.log("getUser url ---: " + url);

    return this.http
      .get(url)
      .map(res => res.json())
      .catch(this.handleError);;
  }

  updateUser(user) {
    if (!user) {
      this.handleError("Error in updateUser: No user object provided");
    }
    let body = JSON.stringify(user);
    return this.http
      .post(this.userUrl, body, { headers: this.headers})
      .map(res => res.json())
      .catch(this.handleError);
  }

  deleteUser(user : User){
    user.active = "false";
    this.updateUser(user).subscribe(u => {
     console.log("updating user") ;
  }).unsubscribe;
  }
  

  private handleError(error: any) {
    console.log("Handling error:" + error);
    return Observable.throw(error.message || error);
  }
}
