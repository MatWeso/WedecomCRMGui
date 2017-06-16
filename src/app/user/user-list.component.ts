import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Observable }        from 'rxjs/Observable';
import { NgRedux, select } from '@angular-redux/store'; 
import { UserService } from './user.service';
import { User } from './user';
import { IAppState } from "app/store";
import { LIST_USERS } from "app/user/actions";

@Component({
  selector: 'users',
  templateUrl: 'user-list.component.html',
  providers: []
})
export class UserListComponent implements OnInit{
  @select(s => s.user.users) users : User[];

  constructor (private userService : UserService, private cd: ChangeDetectorRef){

  }

  ngOnInit(){
    this.userService.loadUsers();
  }

  delete(user: User){
    this.userService.deleteUser(user);
    this.cd.markForCheck();
  }
}
