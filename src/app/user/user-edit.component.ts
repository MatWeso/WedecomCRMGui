import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';

import { UserService } from './user.service';
import { User } from './user';
import { AuthService } from '../shared/auth.service';
import { select } from "@angular-redux/store";

@Component({
  selector: 'userDetail',
  templateUrl: 'user-edit.component.html',
  providers: []
})
export class UserEditComponent implements OnInit, OnDestroy {
  userDetailForm: FormGroup;
  @select(s => s.user.selectedUser) user;
  userIdParam: String;
  subscription;


  constructor(private cd: ChangeDetectorRef, private fb: FormBuilder, private userService: UserService, private authService: AuthService, private route: ActivatedRoute) {
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
    this.userService.loadUser(this.userIdParam);
    this.cd.markForCheck();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  save(){
    this.userService.updateUser(this.userDetailForm.value);
  }

}
