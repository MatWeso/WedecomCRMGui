import { Component, OnInit, OnDestroy, OnChanges, SimpleChanges, ViewChild, AfterViewInit, ContentChild, AfterViewChecked } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, NgForm } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, Router } from '@angular/router';

import { UserService } from './user.service';
import { User } from './user';
import { AuthService } from '../shared/auth.service';
import { select } from "@angular-redux/store";
import { CustomValidators } from 'ng2-validation';
import { UserValidators } from "app/user/userValidators";
@Component({
  selector: 'user-new',
  templateUrl: 'user-new.component.html',
  providers: []
})
export class UserNewComponent implements OnInit, OnDestroy, AfterViewInit, AfterViewChecked {


  @ViewChild('ngForm') uForm: NgForm;
  user: User = new User();
  confirmedPassword: string;
  userCreated: boolean = false;
  validatorAdded = false;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router) {

  }

  ngAfterViewInit(): void {
    console.log("ngAfterViewInit");
  }

  ngAfterViewChecked(): void {
    !this.validatorAdded && this.uForm.controls.confirmedPassword ? this.addValidators(this.uForm) : null;
    this.uForm.form.updateValueAndValidity();
    console.log(this.uForm);
  }

  ngOnInit() {
    console.log("ngOnInit");
  }

  addValidators(form: NgForm) {
    console.log("addValidators");
    form.controls.confirmedPassword.setValidators([CustomValidators.equalTo(form.controls.password)]);
    form.controls.username.setAsyncValidators(new UserValidators(this.userService).shouldBeUnique);
    this.validatorAdded = true;

  }

  onSubmit(form) {
    console.log(form);
    this.userCreated = !this.userCreated;
  }

  ngOnDestroy() {

  }

}