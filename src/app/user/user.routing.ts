import { Router, RouterModule, ActivatedRoute } from '@angular/router';

import { UserListComponent } from './user-list.component';
import { UserDetailComponent } from './user-detail.component';

export const userRouting = RouterModule.forChild([
      {path: 'users/id/new', component: UserDetailComponent},
      {path: 'users/id/:id', component: UserDetailComponent},
      {path: 'users', component: UserListComponent}
])
