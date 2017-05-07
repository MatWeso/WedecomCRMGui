import {Injectable} from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class AuthService {
  private userUrl = "http://localhost:4444/api/users";

  constructor(private http : Http){
  }

  getUser(id){
    var url = this.userUrl + '/id/' + id;
    console.log("getUser url ---: " + url);

    return this.http
          .get("http://localhost:4444/api/users/id/"+id)
          .map(res => res.json())
          .catch(this.handleError);;
  }

  private handleError(error: any) {
    return Observable.throw(error.message || error);
  }

}
