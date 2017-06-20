import { Router, RouterModule, ActivatedRoute } from '@angular/router';

import { UserListComponent } from './user-list.component';
import { UserEditComponent } from './user-edit.component';
import { UserNewComponent } from "./user-new.component";
import { AuthGuard } from "../shared/auth.guard";

export const userRouting = RouterModule.forChild([
      {path: 'users/id/new', component: UserNewComponent, canActivate: [AuthGuard]},
      {path: 'users/edit/:id', component: UserEditComponent, canActivate: [AuthGuard]},
      {path: 'users', component: UserListComponent, canActivate: [AuthGuard]}
])
