import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';

import { UserService } from './user.service';
import { User } from './user';
import { AuthService } from '../login/auth.service';

@Component({
  selector: 'userDetail',
  templateUrl: 'user-detail.component.html',
  providers: []
})
export class UserDetailComponent implements OnInit, OnDestroy {
  userDetailForm: FormGroup;
  user;
  userIdParam: String;
  subscription;


  constructor(private fb: FormBuilder, private userService: UserService, private authService: AuthService, private route: ActivatedRoute) {
    this.userDetailForm = this.fb.group({
      id: [""],
      username: ["", Validators.required],
      active: [""]
    });
  }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(params => {
      this.userIdParam = params['id'];
    });
    this.user = this.userService.getUser(this.userIdParam);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  save(){
    this.user = this.userService.updateUser(this.userDetailForm.value);
  }

}
